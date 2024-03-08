namespace Il2Cpp {
    export namespace UnityEngine {
        /** @internal CoreModule assembly image handle */
        export const CoreModule = domain.assembly("UnityEngine.CoreModule").image;

        export class Object extends Il2Cpp.Object {
            get name() {
                return this.method<Il2Cpp.String>("get_name").invoke();
            }
    
            set name(value: Il2Cpp.String) {
                this.method("set_name").invoke(value);
            }
    
            static instantiate(original: UnityEngine.Object) {
                const klass = CoreModule.class("UnityEngine.Object");
                return klass.method<UnityEngine.Object>("Instantiate", 3).invoke(original);
            }
    
            static destroy(obj: UnityEngine.Object) {
                const klass = CoreModule.class("UnityEngine.Object");
                klass.method("Destroy", 1).invoke(obj);
            }
        }
    }
}