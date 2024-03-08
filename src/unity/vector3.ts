namespace Il2Cpp {
    export namespace UnityEngine {
        export class Vector3 extends ValueType {
            /** Gets the X coordinate of the current vector. */
            get x() {
                return this.field<number>("x").value;
            }
    
            /** Sets the X coordinate of the current vector. */
            set x(value: number) {
                this.field<number>("x").value = value;
            }
            
            /** Gets the Y coordinate of the current vector. */
            get y() {
                return this.field<number>("y").value;
            }
    
            /** Sets the Y coordinate of the current vector. */
            set y(value: number) {
                this.field<number>("y").value = value;
            }
    
            /** Gets the Z coordinate of the current vector. */
            get z() {
                return this.field<number>("z").value;
            }
    
            /** Sets the Z coordinate of the current vector. */
            set z(value: number) {
                this.field<number>("z").value = value;
            }
        }
    
        /** Creates a new vector3 with the given coordinates. */
        export function vector3(x: number = 0, y: number = 0, z: number = 0): Vector3 {
            const klass = CoreModule.class("UnityEngine.Vector3");
            return klass
                .alloc()
                .method<Vector3>(".ctor")
                .overload("System.Single", "System.Single", "System.Single")
                .invoke(x, y, z);
        }
    }
}