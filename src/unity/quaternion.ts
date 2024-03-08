namespace Il2Cpp {
    export namespace UnityEngine {
        export class Quaternion extends ValueType {
            /** Gets the X coordinate of the current quaternion. */
            get x() {
                return this.field<number>("x").value;
            }
    
            /** Sets the X coordinate of the current quaternion. */
            set x(value: number) {
                this.field<number>("x").value = value;
            }
            
            /** Gets the Y coordinate of the current quaternion. */
            get y() {
                return this.field<number>("y").value;
            }
    
            /** Sets the Y coordinate of the current quaternion. */
            set y(value: number) {
                this.field<number>("y").value = value;
            }
    
            /** Gets the Z coordinate of the current quaternion. */
            get z() {
                return this.field<number>("z").value;
            }
    
            /** Sets the Z coordinate of the current quaternion. */
            set z(value: number) {
                this.field<number>("z").value = value;
            }
    
            /** Gets the W coordinate of the current quaternion. */
            get w() {
                return this.field<number>("w").value;
            }
    
            /** Sets the W coordinate of the current quaternion. */
            set w(value: number) {
                this.field<number>("w").value = value;
            }
        }

        /** Creates a new quaternion with the given coordinates. */
        export function quaternion(x: number = 0, y: number = 0, z: number = 0, w: number = 0): Quaternion {
            const klass = CoreModule.class("UnityEngine.Quaternion");
            return klass
                .alloc()
                .method<Quaternion>(".ctor")
                .invoke(x, y, z, w);
        }
    }
}