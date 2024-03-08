namespace Il2Cpp {
    export namespace UnityEngine {
        export class GameObject extends Il2Cpp.Object {
            getComponent(klass: Il2Cpp.Class) {
                return this.method<Component>("GetComponent")
                    .overload("System.Type")
                    .invoke(klass.type.object);
            }
    
            get transform() {
                return this.method<Transform>("get_transform").invoke();
            }
    
            set active(value: boolean) {
                this.method("SetActive").invoke(value);
            }
        }
    }
}