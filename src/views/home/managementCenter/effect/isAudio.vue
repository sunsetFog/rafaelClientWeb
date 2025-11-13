<template>
    <section>
        <el-button @click="playAudio">
            播放音频
        </el-button>
    </section>
</template>

<script>
import toAudio from '@/@energy/rafaelDesign/static/audio/audio.js';
export default {
    name: 'isAudio',
    methods: {
        playAudio() {
            toAudio.playAudio('error.wav');
        }
    }
}
</script>

