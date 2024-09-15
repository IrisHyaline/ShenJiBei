<!-- ParentComponent.vue -->

<template>
    <div class="app-container">
        <div class="app">
            <div>
                <h1 style="text-align: center;"></h1>
            </div>
            <div class="app-column-container">
                <div class="app-column-1">
                    <div>
                        <!-- <Bigsubtitle text="战斗分数" backgroundImage="@/assets/all/total_fights.png" /> -->
                        <div class="image-container">
                            <img src="@/assets/all/total_fights.png" alt="Centered Image" class="centered-image">
                        </div>
                        <div class="fights">
                            <div class="dropdown1">
                                <Dropdown title="" :options="[
                                    { text: '离歌的庭院(40)', value: 40 },
                                    { text: '赴敌者(40)', value: 40 },
                                    { text: '王冠之下(40)', value: 40 },
                                    { text: '或然面纱(20)', value: 20 },
                                    { text: '奉献(20)', value: 20 },
                                    { text: '斩首(20)', value: 20 }
                                ]" @score-changed="updateScore(1, $event)" />
                            </div>
                            <div class="dropdown2">
                                <Dropdown title="" :options="[
                                    { text: '朝谒混乱击杀(200)', value: 200 },
                                    { text: '朝谒(150)', value: 150 }
                                ]" @score-changed="updateScore(2, $event)" />
                            </div>
                            <div class="dropdown3">
                                <Dropdown title="" :options="[
                                    { text: '圣城混乱击杀(200)', value: 200 },
                                    { text: '圣城(150)', value: 150 }
                                ]" @score-changed="updateScore(3, $event)" />
                            </div>
                            <div class="dropdown4">
                                <Dropdown title="" :options="[
                                    { text: '溃乱魔典(30)', value: 30 },
                                    { text: '大棋一盘(30)', value: 30 },
                                    { text: '其他(10)', value: 10 }
                                ]" @score-changed="updateScore(4, $event)" />
                            </div>
                            <div class="dropdown5">
                                <Dropdown title="" :options="[
                                    { text: '猩红甬道(50)', value: 50 },
                                    { text: '年代断层(30)', value: 30 },
                                    { text: '假想对冲(30)', value: 30 },
                                    { text: '朽败考察(30)', value: 30 },
                                    { text: '其他(20)', value: 20 }
                                ]" @score-changed="updateScore(5, $event)" />
                            </div>
                            <div class="dropdown6">
                                <Dropdown title="" :options="[
                                    { text: '计划耕种(60)', value: 60 },
                                    { text: '通道封锁(40)', value: 40 },
                                    { text: '寄人城池下(40)', value: 40 },
                                    { text: '其他(30)', value: 30 }
                                ]" @score-changed="updateScore(6, $event)" />
                            </div>
                            <div class="dropdown7">
                                <Dropdown title="" :options="[
                                    { text: '谋求共识(60)', value: 60 },
                                    { text: '神圣的渴求(60)', value: 60 }
                                ]" @score-changed="updateScore(7, $event)" />
                            </div>
                            <div class="dropdown8">
                                <Dropdown title="" :options="[
                                    { text: '紧急战场侧面(60)', value: 60 },
                                    { text: '紧急鸭速公路(20)', value: 20 },
                                    { text: '紧急劫虚济实(20)', value: 20 }
                                ]" @score-changed="updateScore(8, $event)" />
                            </div>
                        </div>
                        <!-- <div class="summary">总分：{{ total_fights }}</div> -->
                    </div>


                </div>
                <div class="app-column-2">


                    <!-- <component is="bigsubtitle" :text="'节点分数'"></component> -->
                    <div class="image-container">
                        <img src="@/assets/all/total_steps.png" alt="Centered Image" class="centered-image">
                    </div>
                    <div class="steps">
                        <div>
                            <div class="input1">
                                <component is="naive-input-text" ref="steps_levels" :label="''" :multiplier="150"
                                    v-model="inputValue1" @text-input-changed="checkValue1"></component>
                            </div>
                            <div class="input2">
                                <component is="naive-input-text" ref="steps_collections" :label="''" :multiplier="3"
                                    @text-input-changed="recalTotal"></component>
                            </div>
                            <div class="input3">
                                <component is="naive-input-text" ref="steps_fights" :label="''" :multiplier="20"
                                    @text-input-changed="recalTotal"></component>
                            </div>
                            <div class="input4">
                                <component is="naive-input-text" ref="steps_emergency_fights" :label="''"
                                    :multiplier="30" @text-input-changed="recalTotal"></component>
                            </div>
                            <div class="input5">
                                <component is="naive-input-text" ref="steps_event_fights" :label="''" :multiplier="40"
                                    @text-input-changed="recalTotal"></component>
                            </div>
                            <!-- <div class="summary">总分：{{ total_steps }}</div> -->
                        </div>
                    </div>
                    <div>
                        <!-- <component is="bigsubtitle" :text="'分数修正'"></component> -->
                        <div class="image-container">
                            <img src="@/assets/all/total_repair.png" alt="Centered Image" class="centered-image">
                        </div>
                        <div class="repair">
                            <component is="repair" ref="repair" :label="''" :multiplier="-1"
                                @text-input-changed="recalTotal"></component>
                        </div>
                    </div>

                </div>
                <div class="app-column-3">
                    <!-- <component is="bigsubtitle" :text="'事件分数'"></component> -->
                    <div class="image-container">
                        <img src="@/assets/all/total_events.png" alt="Centered Image" class="centered-image">
                    </div>
                    <table class="events-container">
                        <tr>
                            <td>
                                <Checkbox1 :multiplier="30" @tick-changed="handleTickChanged" />
                            </td>
                            <td>
                                <Checkbox2 :multiplier="60" @tick-changed="handleTickChanged" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Checkbox3 :multiplier="30" @tick-changed="handleTickChanged" />
                            </td>
                            <td>
                                <Checkbox4 :multiplier="100" @tick-changed="handleTickChanged" />
                            </td>
                        </tr>
                    </table>
                    <!-- <div class="summary">总分：{{ total_events }}</div> -->
                    <div class="image-container">
                        <img src="@/assets/all/total.png" alt="Centered Image" class="centered-image">
                    </div>
                    <h1 class="final" style="text-align: center;">{{ _total }} </h1>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import InputText from './components/input-text.vue';
import SingleTick from './components/single-tick.vue';
import Subtitle from './components/subtitle.vue';
import NaiveInputText from './components/naive-input-text.vue';
import Bigsubtitle from './components/bigsubtitle.vue';
import Dropdown from './components/dropdown.vue';
import Checkbox1 from './components/checkbox1.vue';
import Checkbox2 from './components/checkbox2.vue';
import Checkbox3 from './components/checkbox3.vue';
import Checkbox4 from './components/checkbox4.vue';
import Repair from './components/repair.vue';

export default {
    mounted() {
        document.title = '通天高校联赛计算器';
    },
    components: {
        InputText,
        SingleTick,
        Subtitle,
        NaiveInputText,
        Bigsubtitle,
        Dropdown,
        Checkbox1,
        Checkbox2,
        Checkbox3,
        Checkbox4,
        Repair
    },
    data() {
        return {
            selectedOption: '',
            initial_value: 0,
            total_fights: 0,
            total_steps: 0,
            _total: 0,
            scores: Array(8).fill(0),
            total_events: 0,
            inputValue1: 0
        };
    },
    methods: {
        handleTickChanged(result) {
            this.total_events += result;
            console.log('Tick changed:', result);
            this.recalTotal();
        },
        updateScore(dropdownId, newScore) {
            this.scores[dropdownId - 1] = parseInt(newScore, 10);
            this.updateTotalFights();
        },
        updateTotalFights() {
            this.total_fights = this.scores.reduce((sum, score) => sum + score, 0);
            this.recalTotal();
        },
        checkValue1(value) {
            const max = 8;

            console.log('Received value:', value, 'Type:', typeof value);
            if (value > 1200) {
                alert(`层数上限为 ${max} ，请修改输入值`);

                // 下面这几行不起作用，我也不知道为什
                // 只能保持分数不变，不能自动改值
                value = 1200;
                this.$set(this, 'inputValue1', 8); // 使用 Vue.set 确保响应式更新
                this.inputValue1 = 8; // 更新 inputValue1
                this.$nextTick(() => {
                    this.$refs.steps_levels.$forceUpdate(); // 强制更新组件
                });
            } else {
                // 继续处理有效输入值
                // 你的其他逻辑
                this.inputValue1 = value;
            }
            this.recalTotal();
        },
        recalTotal() {

            // 更新 result 的值
            this.total_steps = Object.keys(this.$refs)
                .filter(key => key.startsWith('steps'))
                .reduce((sum, key) => sum + this.$refs[key].result, 0);
            const repair = this.$refs.repair.result;
            this._total = this.total_steps + this.total_fights - repair + this.total_events;

        }
    },
    computed: {
    }
};
</script>

<style scoped>
.steps {
    display: flex;
    justify-content: center;
}

.app-container {
    padding-top: 25vh;
    /* background-color: #000; */
    background-image: url('assets/background.png');
    background-size: cover;
    /* 使背景图片覆盖整个容器 */
    background-position: center;
    /* 使背景图片居中 */
    background-size: cover;
    height: 100vh;
}

.app-column-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

@media (min-width: 1200px) {

    /* 当屏幕宽度大于或等于 1200px 时 */
    .app-column-container {
        flex-direction: row;
        /* 变为三列 */
        justify-content: space-between;
        /* 在三列之间均匀分布 */

        justify-content: center;
        align-items: center;
        width: 100%;
    }

}

.app-column-1 {
    flex: 2 1 0;
    /* 占据2份宽度 */
    /* 根据需要调整间距 */
    align-self: flex-start;
    margin-left: -100px;
}

.app-column-2 {
    flex: 2 1 0;
    /* 占据2份宽度 */
    /* 根据需要调整间距 */
    align-self: flex-start;
    margin-left: -100px;
}

.app-column-3 {
    flex: 3 1 0;
    /* 占据3份宽度 */
    /* 根据需要调整间距 */
    align-self: flex-start;
}

.image-container {
    display: flex;
    justify-content: center;
}

.centered-image {
    width: 400px;
    height: auto;
}

.repair {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -40px;
    /* 根据需要调整间距 */

}

/* 五个节点 */
.input1 {
    margin-top: -55px;
    margin-left: -100px;
    width: 400px;
    height: 70px;
    background-image: url('@/assets/all/steps_levels.png');
    background-size: 308px 65px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

.input2 {
    margin-top: -20px;
    margin-left: -100px;
    width: 400px;
    height: 70px;
    background-image: url('@/assets/all/steps_collections.png');
    background-size: 308px 65px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

.input3 {
    margin-top: -20px;
    margin-left: -100px;
    width: 400px;
    height: 70px;
    background-image: url('@/assets/all/steps_fights.png');
    background-size: 308px 65px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

.input4 {
    margin-top: -20px;
    margin-left: -100px;
    width: 400px;
    height: 70px;
    background-image: url('@/assets/all/steps_emergency_fights.png');
    background-size: 308px 65px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

.input5 {
    margin-top: -20px;
    margin-left: -100px;
    width: 400px;
    height: 70px;
    background-image: url('@/assets/all/steps_event_fights.png');
    background-size: 308px 65px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

/* 八个下拉框 */
.dropdown1 {
    margin-left: 50px;
    /* width: 600px; */
    background-image: url('@/assets/all/dropdown1.png');
    background-size: 313px 44px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

.dropdown2 {
    margin-left: 50px;
    /* width: 600px; */
    background-image: url('@/assets/all/dropdown2.png');
    background-size: 313px 44px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

.dropdown3 {
    margin-left: 50px;
    /* width: 600px; */
    background-image: url('@/assets/all/dropdown3.png');
    background-size: 313px 44px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

.dropdown4 {
    margin-left: 50px;
    /* width: 600px; */
    background-image: url('@/assets/all/dropdown4.png');
    background-size: 313px 44px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

.dropdown5 {
    margin-left: 50px;
    /* width: 600px; */
    background-image: url('@/assets/all/dropdown5.png');
    background-size: 313px 44px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

.dropdown6 {
    margin-left: 50px;
    /* width: 600px; */
    background-image: url('@/assets/all/dropdown6.png');
    background-size: 313px 44px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

.dropdown7 {
    margin-left: 50px;
    /* width: 600px; */
    background-image: url('@/assets/all/dropdown7.png');
    background-size: 313px 44px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}

.dropdown8 {
    margin-left: 52px;
    /* width: 600px; */
    background-image: url('@/assets/all/dropdown8.png');
    background-size: 311px 43px;
    /* 设置背景图片的大小 */
    background-repeat: no-repeat;
    /* 防止背景图片重复 */
    background-position: 100px;
}


.app {
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    /* background-color: #000; */
    /* 如果需要，可以添加这一行来使背景图片覆盖整个元素 */
    color: #fff;
}

@media (max-width: 1200px) {

    /* 当屏幕宽度大于或等于 1200px 时 */
    .app {
        max-width: 400px;
    }
}

.summary {
    margin-top: 18px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
}

.final {
    margin-top: -80px;
    font-size: 80px;
}
</style>
