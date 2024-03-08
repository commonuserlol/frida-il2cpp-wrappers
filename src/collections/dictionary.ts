namespace Il2Cpp {
    export class Dictionary<K extends Il2Cpp.Field.Type = Il2Cpp.Field.Type, V extends Il2Cpp.Field.Type = Il2Cpp.Field.Type> extends Il2Cpp.Object {
        /** @internal */
        zip = (a: globalThis.Array<K>, b: globalThis.Array<V>) => a.map((k, i) => [k, b[i]]);

        /** Gets the pairs count of the current dictionary. */
        get length() {
            return this.method<number>("get_Count").invoke();
        }

        /** Gets all keys of the current dictionary. */
        get keys() {
            const keys = Il2Cpp.array<K>(this.class.generics[0], this.length);
            (this.method<Il2Cpp.Object>("get_Keys").invoke()).method("CopyTo").invoke(keys, 0);
            return keys.elements.read(this.length);
        }

        /** Gets all values of the current dictionary. */
        get values() {
            const values = Il2Cpp.array<V>(this.class.generics[1], this.length);
            (this.method<Il2Cpp.Object>("get_Values").invoke()).method("CopyTo").invoke(values, 0);
            return values.elements.read(this.length);
        }

        /** Gets all pairs of the current dictionary. */
        get entries() {
            return this.zip(this.keys, this.values);
        }

        /** Gets the value by the specified key of the current dictionary. */
        get(key: K): V {
            if (!this.containsKey(key))
                raise(`the given key ${key} is not in the dictionary`);

            return this.method<V>("get_Item").invoke(key);
        }

        /** Sets the pair of the current dictionary. */
        set(key: K, value: V) {
            if (this.containsKey(key))
                warn(`the given key ${key} is already in the dictionary. It will be overwritten with the new value ${value}`);

            this.method("set_Item").invoke(key, value);
        }

        /** Adds a new key to the current dictionary. */
        add(key: K, value: V) {
            this.method("Add").invoke(key, value);
        }

        /** Clears the current dictionary. */
        clear() {
            this.method("Clear").invoke();
        }

        /** Determines if the key is in the current dictionary. */
        containsKey(key: K) {
            return this.method<boolean>("ContainsKey").invoke(key);
        }

        /** Determines if the value is in the current dictionary. */
        containsValue(value: V) {
            return this.method<boolean>("ContainsValue").invoke(value);
        }

        /** Finds a key in the current dictionary and returns its index. */
        find(key: K) {
            return this.method<number>("FindEntry").invoke(key);
        }

        /** Removes the given key from the current dictionary. */
        remove(key: K) {
            return this.method<boolean>("Remove").invoke(key);
        }

        *[Symbol.iterator](): IterableIterator<[K, V]> {
            const entries = this.entries;
            for (let i = 0; i < this.length; i++) {
                yield entries[i] as [K, V];
            }
        }

        /** */
        toString() {
            return this.isNull() ? "null" : `{${[...this.entries.entries()].map(([k, v]) => `${k}: ${v}`).join(", ")}}`;
        }
    }

    /** Creates a new dictionary with the given elements. */
    export function dictionary<K extends Il2Cpp.Field.Type = Il2Cpp.Field.Type, V extends Il2Cpp.Field.Type = Il2Cpp.Field.Type>(keyClass: Il2Cpp.Class, valueClass: Il2Cpp.Class, elements?: Map<K, V>): Dictionary<K, V> {
        const dictionary = new Il2Cpp.Dictionary<K, V>(
            Il2Cpp.corlib.class("System.Collections.Generic.Dictionary`2")
                .inflate(keyClass, valueClass)
                .alloc()
        );

        for (const [key, value] of elements ?? []) {
            dictionary.set(key, value);
        }

        return dictionary;
    }
}