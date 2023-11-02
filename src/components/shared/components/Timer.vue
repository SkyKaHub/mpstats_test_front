<script setup>
    import { ref, onMounted, computed, watch } from 'vue';

    const now = new Date();

    const isRunning = ref(false);
    const seconds = ref(now.getSeconds());
    const minutes = ref(now.getMinutes());
    const hours = ref(now.getHours());
    let timerInterval;

    const formatedTime = computed(() => {
        return `${(hours.value < 10) ? '0' + hours.value : seconds.value} : ${(minutes.value < 10) ? '0' + minutes.value : minutes.value} : ${(seconds.value < 10) ? '0' + seconds.value : seconds.value}`;
    });

    watch(seconds, (newVal) => {
        if ( newVal >= 60 ) {
            minutes.value++;
            seconds.value = 0;
        }
    });

    watch(minutes, (newVal) => {
        if ( newVal >= 60 ) {
            hours.value++;
            minutes.value = 0;
        }
    });

    watch(hours, (newVal) => {
        if ( newVal >= 24 ) {
            hours.value = 0;
        }
    });

    function startTimer() {
        if (!isRunning.value) {
            isRunning.value = true;
            seconds.value++;
            timerInterval = setInterval(() => {
                seconds.value++;
            }, 1000);
        }
    }

    function stopTimer() {
        if (isRunning.value) {
            isRunning.value = false;
            clearInterval(timerInterval);
        }
    }

    function resetTimer() {
        isRunning.value = false;
        seconds.value = 0, minutes.value = 0, hours.value = 0;
        clearInterval(timerInterval);
    }

    onMounted(() => {
        startTimer();
    });

</script>
<template>
    <section class="timer">
        <div class="timer_wrapper">
            <h1 class="title">Секундомер</h1>
            <p class="time">
                {{ formatedTime }}
            </p>
            <div class="buttons">
                <button @click="startTimer">
                    <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                    <span>Старт</span>
                </button>
                <button @click="stopTimer">
                    <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                    <span>Стоп</span>
                </button>
                <button @click="resetTimer">
                    <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg>
                    <span>Сброс</span>
                </button>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
    .timer {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        .timer_wrapper {
            .title {
                font-size: 60px;
                text-align: center;
                text-transform: uppercase;
                margin-bottom: 20px;
            }

            .time {
                margin-bottom: 20px;
                text-align: center;
                font-size: 25px;
            }

            .buttons {
                display: flex;
                justify-content: space-around;

                button {
                    width: 180px;
                    height: 60px;
                    cursor: pointer;
                    background: transparent;
                    border: 1px solid #91C9FF;
                    outline: none;
                    transition: 0.3s ease-in-out;

                    &:hover {
                        transition: 0.3s ease-in-out;
                        background: #4F95DA;

                        svg {
                            stroke-dashoffset: -480;
                        }

                        span {
                            color: white;
                            transition: 0.3s ease-in-out;
                        }
                    }

                    svg {
                        position: absolute;
                        left: 0;
                        top: 0;
                        fill: none;
                        stroke: #fff;
                        stroke-dasharray: 150 480;
                        stroke-dashoffset: 150;
                        transition: 1s ease-in-out;
                    }

                    span {
                        font-size: 18px;
                        font-weight: 100;
                    }
                }
            }
        }
    }
</style>
