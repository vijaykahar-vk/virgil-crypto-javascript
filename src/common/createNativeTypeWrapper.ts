const apply = Function.prototype.apply;
const hasOwn = Object.prototype.hasOwnProperty;
const toString = Object.prototype.toString;

/**
 * Interface containing the set of functions allowing to wrap raw
 * VirgilCrypto functions so that they are safe to call with
 * `Buffer`s as binary data arguments and return binary data as
 * `Buffer`s instead of VirgilByteArray.
 * In the browser, the wrapper functions also automatically free
 * memory allocated for VirgilByteArray instances.
 *
 * @hidden
 */
export interface NativeTypeWrapper {
	/**
	 * Creates "safe" versions of `methods` on the `ctor`'s prototype.
	 * New methods will have the "Safe" suffix, original methods are
	 * not modified.
	 * @param {Function} ctor - Constructor function whose prototype to extend.
	 * @param {string[]} methods - Array of method names to create "safe" versions of.
	 */
	createSafeInstanceMethods: (ctor: Function, methods: string[]) => void;

	/**
	 * Creates "safe" versions of `methods` on the `ctor` function (i.e. static
	 * methods). New methods will have the "Safe" suffix, original methods are
	 * not modified.
	 * @param {Function} ctor - Constructor function to extend.
	 * @param {string[]} methods - Array of static method names to create "safe" versions of.
	 */
	createSafeStaticMethods: (ctor: (Function & {[p: string]: any}), methods: string[]) => void;
}

/**
 * Creates a wrapper object for the native library `lib`.
 *
 * @hidden
 *
 * @param {any} lib - Native VirgilCrypto library (browser or Node.js).
 * @returns {NativeTypeWrapper} The wrapper object.
 */
export function createNativeTypeWrapper (lib: any): NativeTypeWrapper {
	const utils = createUtils(lib);

	return {
		createSafeInstanceMethods,
		createSafeStaticMethods
	};

	function createSafeInstanceMethods(ctor: Function, methods: string[]) {
		let proto: any;
		if (process.browser) {
			proto = ctor.prototype;
		} else {
			proto = Object.getPrototypeOf(ctor.prototype);
		}

		methods.forEach(method => {
			if (!(method in proto) || typeof proto[method] !== 'function') {
				throw new TypeError(`Method "${method}" does not exist on ${ctor.name} prototype`);
			}

			// cannot replace the method on the prototype as there are additional properties
			// associated with class prototype methods generated by emscripten
			// cannot replace the prototype either as it is used for reference
			// equality check during construction of instances (e.g. new VirgilHash()
			// fails if we replace the `VirgilHash.prototype` with a custom object)
			proto[method + 'Safe'] = wrapNativeFunction(proto[method]);
		});
	}

	function createSafeStaticMethods(ctor: Function & { [key: string]: any }, methods: string[]) {
		methods.forEach(method => {
			if (!hasOwn.call(ctor, method) || typeof ctor[method] !== 'function') {
				throw new TypeError(`Method "${method}" does not exist on ${ctor.name}`);
			}

			// adding Safe suffix for consistency with instance methods
			ctor[method + 'Safe'] = wrapNativeFunction(ctor[method], ctor)
		});
	}

	function wrapNativeFunction(fn: Function, target?: any) {
		return function (this: any, ...args: any[]) {
			let deletionQueue: any[] = [];
			const transformedArgs: any[] = [];

			for (let i = 0; i < args.length; i++) {
				if (utils.isBuffer(args[i])) {
					const arr = utils.bufferToVirgilByteArray(args[i]);
					if (process.browser) {
						deletionQueue.push(arr);
					}

					transformedArgs[i] = arr;
				} else {
					transformedArgs[i] = args[i];
				}
			}

			let result;
			try {
				result = apply.call(fn, target || this, transformedArgs);
				if (utils.isVirgilByteArray(result)) {
					if (process.browser) {
						deletionQueue.push(result);
					}

					result = utils.virgilByteArrayToBuffer(result);
				}

				return result;
			} finally {
				if (process.browser) {
					while (deletionQueue.length > 0) {
						let item = deletionQueue.pop();
						item.delete();
					}
				}
			}
		}
	}
}

function createUtils(lib: any) {
	return {
		isBuffer (obj: any) {
			return Buffer.isBuffer(obj);
		},

		bufferToVirgilByteArray(buffer: Buffer) {
			if (process.browser) {
				return lib.VirgilByteArray.fromUint8Array(buffer);
			} else {
				const array = new lib.VirgilByteArray(buffer.byteLength);

				for (let i = 0; i < buffer.length; ++i) {
					array.set(i, buffer[i]);
				}

				return array;
			}
		},

		isVirgilByteArray(obj: any) {
			if (process.browser) {
				return obj != null && obj.constructor === lib.VirgilByteArray;
			} else {
				if (obj == null) {
					return false;
				}

				const tag = toString.call(obj);
				return tag === '[object _exports_VirgilByteArray]' || tag === '[object VirgilByteArray]';
			}
		},

		virgilByteArrayToBuffer(byteArray: any) {
			const size = byteArray.size();
			const buffer = new Buffer(size);

			for (let i = 0; i < size; ++i) {
				buffer[i] = byteArray.get(i);
			}

			return buffer;
		}
	};
}
