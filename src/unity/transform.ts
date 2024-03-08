namespace Il2Cpp {
    export namespace UnityEngine {
        export class Transform extends Component {
            get position() {
                return this.method<Vector3>("get_position").invoke();
            }
    
            set position(value: Vector3) {
                this.method("set_position").invoke(value);
            }
    
            get localPosition() {
                return this.method<Vector3>("get_localPosition").invoke();
            }
    
            set localPosition(value: Vector3) {
                this.method("set_localPosition").invoke(value);
            }
    
            get rotation() {
                return this.method<Quaternion>("get_rotation").invoke();
            }
    
            set rotation(value: Quaternion) {
                this.method("set_rotation").invoke(value);
            }
    
            get localRotation() {
                return this.method<Quaternion>("get_localRotation").invoke();
            }
    
            set localRotation(value: Quaternion) {
                this.method("set_localRotation").invoke(value);
            }
            
            get localScale() {
                return this.method<Vector3>("get_localScale").invoke();
            }
    
            set localScale(value: Vector3) {
                this.method("set_localScale").invoke(value);
            }
    
            get parent() {
                return this.method<Transform>("get_parent").invoke();
            }
    
            set parent(value: Transform) {
                this.method("set_parent").invoke(value);
            }
    
            get root() {
                return this.method<Transform>("get_root").invoke();
            }
            
            get childCount() {
                return this.method<number>("get_childCount").invoke();
            }
    
            child(index: number) {
                this.method<Transform>("GetChild").invoke(index);
            }
        }
    }
}