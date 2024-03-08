namespace Il2Cpp {
    export namespace UnityEngine {
        // Actually it extends `UnityEngine.AudioBehaviour`
        // But in several dumps `AudioBehaviour` is just
        // class UnityEngine.AudioBehaviour : UnityEngine.Behaviour
        // {  
        // }
        export class AudioSource extends Behaviour {
            /** @internal */
            static klass = CoreModule.class("UnityEngine.AudioSource");

            static playHelper(source: AudioSource, delay: number) {
                this.klass.method("PlayHelper").invoke(source, delay);
            }

            static playOneShotHelper(source: AudioSource, clip: AudioClip, volumeScale: number) {
                this.klass.method("PlayOneShotHelper").invoke(source, clip, volumeScale);
            }

            set volume(value: number) {
                this.method("set_volume").invoke(value);
            }

            get clip() {
                return this.method<AudioClip>("get_clip").invoke();
            }

            set clip(value: AudioClip) {
                this.method("set_clip").invoke(value);
            }

            play() {
                this.method("Play").invoke();
            }

            playOneShot(clip: AudioClip) {
                this.method("PlayOneShot", 1).invoke(clip);
            }

            get isPlaying() {
                return this.method<boolean>("get_isPlaying").invoke();
            }

            get loop() {
                return this.method<boolean>("get_loop").invoke();
            }
        }
    }
}