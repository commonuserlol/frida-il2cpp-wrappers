namespace Il2Cpp {
    export namespace UnityEngine {
        export class Component extends Object {
            get transform() {
                return this.method<Transform>("get_transform").invoke();
            }
    
            get gameObject() {
                return this.method<GameObject>("get_gameObject").invoke();
            }
        }
    }
}