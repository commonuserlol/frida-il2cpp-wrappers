namespace Il2Cpp {
    export namespace UnityEngine {
        export class Behaviour extends Component {
            get enabled() {
                return this.method<boolean>("get_enabled").invoke();
            }

            set enabled(value: boolean) {
                this.method<boolean>("set_enabled").invoke(value);
            }
        }
    }
}