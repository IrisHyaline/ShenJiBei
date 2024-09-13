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
                        <component is="bigsubtitle" :text="'战斗分数'"></component>
                        <div class="fights">
                            <div>
                                <Dropdown title="三层险路恶敌" :options="[
                                    { text: '离歌的庭院', value: 40 },
                                    { text: '赴敌者', value: 40 },
                                    { text: '王冠之下', value: 40 },
                                    { text: '或然面纱', value: 20 },
                                    { text: '奉献', value: 20 },
                                    { text: '斩首', value: 20 }
                                ]" @score-changed="updateScore(1, $event)" />
                            </div>
                            <div>
                                <Dropdown title="五层险路恶敌" :options="[
                                    { text: '朝谒混乱击杀', value: 200 },
                                    { text: '朝谒', value: 150 }
                                ]" @score-changed="updateScore(2, $event)" />
                            </div>
                            <div>
                                <Dropdown title="六层险路恶敌" :options="[
                                    { text: '圣城混乱击杀', value: 200 },
                                    { text: '圣城', value: 150 }
                                ]" @score-changed="updateScore(3, $event)" />
                            </div>
                            <div>
                                <Dropdown title="三层紧急作战" :options="[
                                    { text: '溃乱魔典', value: 30 },
                                    { text: '大棋一盘', value: 30 },
                                    { text: '其他', value: 10 }
                                ]" @score-changed="updateScore(4, $event)" />
                            </div>
                            <div>
                                <Dropdown title="四层紧急作战" :options="[
                                    { text: '猩红甬道', value: 50 },
                                    { text: '年代断层', value: 30 },
                                    { text: '假想对冲', value: 30 },
                                    { text: '朽败考察', value: 30 },
                                    { text: '其他', value: 20 }
                                ]" @score-changed="updateScore(5, $event)" />
                            </div>
                            <div>
                                <Dropdown title="五层紧急作战" :options="[
                                    { text: '计划耕种', value: 60 },
                                    { text: '通道封锁', value: 40 },
                                    { text: '寄人城池下', value: 40 },
                                    { text: '其他', value: 30 }
                                ]" @score-changed="updateScore(6, $event)" />
                            </div>
                            <div>
                                <Dropdown title="六层紧急作战" :options="[
                                    { text: '谋求共识', value: 60 },
                                    { text: '神圣的渴求', value: 60 }
                                ]" @score-changed="updateScore(7, $event)" />
                            </div>
                            <div>
                                <Dropdown title="特殊事件作战" :options="[
                                    { text: '紧急战场侧面', value: 60 },
                                    { text: '紧急鸭速公路', value: 20 },
                                    { text: '紧急劫虚济实', value: 20 }
                                ]" @score-changed="updateScore(8, $event)" />
                            </div>
                        </div>
                        <div class="summary">总分：{{ total_fights }}</div>
                    </div>

                    <div>
                        <component is="bigsubtitle" :text="'分数修正'"></component>
                        <table class="table">
                            <component is="naive-input-text" ref="repair" :label="'分数修正'" :multiplier="-1"
                                @text-input-changed="recalTotal"></component>
                        </table>
                    </div>
                </div>
                <div class="app-column-2">


                    <component is="bigsubtitle" :text="'节点分数'">
                    </component>
                    <div class="steps">
                        <div>
                            <component is="input-text" ref="steps_levels" :label="'通过层数'" :multiplier="150"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="steps_collections" :label="'持有收藏品数'" :multiplier="3"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="steps_fights" :label="'普通作战次数'" :multiplier="20"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="steps_emergency_fights" :label="'紧急作战次数'" :multiplier="30"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="steps_event_fights" :label="'事件作战次数'" :multiplier="40"
                                @text-input-changed="recalTotal"></component>
                            <div class="summary">总分：{{ total_steps }}</div>
                        </div>
                    </div>
                    <component is="bigsubtitle" :text="'事件分数'">
                    </component>
                    <table>
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
                    <div class="summary">总分：{{ total_events }}</div>
                </div>
            </div>
            <h1 style="text-align: center;">最终得分：{{ _total }} </h1>

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
        Checkbox4
    },
    data() {
        return {
            selectedOption: '',
            initial_value: 0,
            total_fights: 0,
            total_steps: 0,
            _total: 0,
            scores: Array(8).fill(0),
            total_events: 0
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
        recalTotal(newResult) {
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

<style>
.steps {
    display: flex;
    justify-content: center;
}

.app-container {
    padding-top: 25vh;
    background-color: #000;
    background-image: url('assets/background.png');
    background-size: cover;
    /* 使背景图片覆盖整个容器 */
    background-position: center;
    /* 使背景图片居中 */
    background-size: cover;
}

.app-column-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media (min-width: 1200px) {

    /* 当屏幕宽度大于或等于 1200px 时 */
    .app-column-container {
        flex-direction: row;
        /* 变为三列 */
    }
}

.app-column-1 {
    margin-right: 50px;
    align-self: flex-start;
}

.app-column-2 {
    margin-left: 50px;
    align-self: flex-start;
}


.info-column-container {
    display: flex;
    justify-content: space-between;
}

.info-column {
    flex: 1;
    margin: 0 10px;
}

.double_column_table {
    margin: auto;
    justify-content: center;
    display: flex;
}

table {
    margin: auto;
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
</style>
