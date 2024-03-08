namespace Il2Cpp {
    export class List<T extends Il2Cpp.Field.Type = Il2Cpp.Field.Type> extends Il2Cpp.Object {
        get capacity(): number {
            return this.method<number>("get_Capacity").invoke();
        }

        set capacity(value: number) {
            this.method("set_Capacity").invoke(value);
        }

        /** Gets the element count of the current list. */
        get length(): number {
            return this.method<number>("get_Count").invoke();
        }
        
        /** Gets the value by the specified index of the current list. */
        get(index: number): T {
            return this.method<T>("get_Item").invoke(index);
        }

        /** Sets the element of the current list. */
        set(index: number, value: T) {
            if (this.contains(value))
                warn(`the given element ${value} is already in the list. It will be overwritten with the new value ${value}`);

            this.method("set_Item").invoke(index, value);
        }

        add(item: T) {
            this.method("Add").invoke(item);
        }

        /** Clears the current list. */
        clear() {
            this.method("Clear").invoke();
        }

        /** Determines if the key is in the current list. */
        contains(item: T): boolean {
            return this.method<boolean>("Contains").invoke(item);
        }

        /** Determines the index of the element of the current list. */
        indexOf(item: T): number {
            return this.method<number>("IndexOf").invoke(item);
        }

        /** Inserts an element at the given index of the current list. */
        insert(index: number, item: T) {
            this.method("Insert").invoke(index, item);
        }

        /** Removes a data element from the current list. */
        remove(item: T): boolean {
            return this.method<boolean>("Remove").invoke(item);
        }

        /** Reverses the current list. */
        reverse() {
            this.method("Reverse").invoke();
        }

        /** Sorts the current list. */
        sort() {
            this.method("Sort").invoke();
        }

        /** Converts the current list to an array. */
        get toArray(): Il2Cpp.Array<T> {
            return this.method<Il2Cpp.Array<T>>("ToArray").invoke();
        }

        /** Iterable. */
        *[Symbol.iterator](): IterableIterator<T> {
            for (let i = 0; i < this.length; i++) {
                yield this.get(i);
            }
        }

        /** */
        toString(): string {
            return this.toArray.toString();
        }
    }

    /** Creates a new list with the given elements. */
    export function list<T extends Il2Cpp.Field.Type = Il2Cpp.Field.Type>(klass: Il2Cpp.Class, elements: T[] = []): List<T> {
        const list = new Il2Cpp.List<T>(
            Il2Cpp.corlib.class("System.Collections.Generic.List`1")
                .inflate(klass)
                .alloc()
        );

        for (const element of elements) {
            list.add(element);
        }

        return list;
    }
}