<!-- ParentComponent.vue -->

<template>
    <div class="app-container">
        <div class="app">
            <div>
                <h1 style="text-align: center;">蜀道行计算器</h1>
            </div>
            <component is="bigsubtitle" :text="'团队得分'"></component>
            <div class="team-column-container">
                <div class="team-column-1">
                    <div>
                        <component is="subtitle" :text="'干员次数'"></component>
                        <div style="text-align: center;">扣分制！！！</div>
                        <table class="double_column_table">
                            <div class="column">
                                <component is="input-text" ref="ban_wsdr" :label="'维什戴尔'" :multiplier="500"
                                    @text-input-changed="recalTotal">
                                </component>
                                <component is="input-text" ref="ban_lgs" :label="'逻各斯'" :multiplier="250"
                                    @text-input-changed="recalTotal">
                                </component>
                                <component is="input-text" ref="ban_nf" :label="'妮芙'" :multiplier="150"
                                    @text-input-changed="recalTotal">
                                </component>
                                <component is="input-text" ref="ban_askl" :label="'阿斯卡纶'" :multiplier="150"
                                    @text-input-changed="recalTotal">
                                </component>
                                <component is="input-text" ref="ban_cjayfl" :label="'纯烬艾雅法拉'" :multiplier="100"
                                    @text-input-changed="recalTotal">
                                </component>
                                <component is="input-text" ref="ban_al" :label="'艾拉'" :multiplier="100"
                                    @text-input-changed="recalTotal">
                                </component>
                                <component is="input-text" ref="ban_s" :label="'黍'" :multiplier="100"
                                    @text-input-changed="recalTotal">
                                </component>
                                <component is="input-text" ref="ban_ly" :label="'莱伊'" :multiplier="75"
                                    @text-input-changed="recalTotal">
                                </component>
                                <component is="input-text" ref="ban_qlryd" :label="'麒麟R夜刀'" :multiplier="75"
                                    @text-input-changed="recalTotal">
                                </component>
                                <component is="input-text" ref="ban_yns" :label="'伊内丝'" :multiplier="75"
                                    @text-input-changed="recalTotal">
                                </component>
                                <component is="input-text" ref="extrasix" :label="'额外六星'" :multiplier="300"
                                    @text-input-changed="recalTotal">
                                </component>
                            </div>
                        </table>
                        <div class="summary">总分：{{ total_ban }} </div>
                    </div>
                </div>
                <div class="team-column-2">
                    <div>
                        <component is="subtitle" :text="'取源石锭'"></component>
                        <table class="table">
                            <component is="input-text" ref="coins1" :label="'选手1'" :multiplier="1"
                                @text-input-changed="recalTotal">
                            </component>
                            <component is="input-text" ref="coins2" :label="'选手2'" :multiplier="1"
                                @text-input-changed="recalTotal">
                            </component>
                            <component is="input-text" ref="coins3" :label="'选手3'" :multiplier="1"
                                @text-input-changed="recalTotal">
                            </component>
                        </table>
                        <div class="summary">总分：{{ total_coins }}</div>
                    </div>
                    <div>
                        <component is="subtitle" :text="'结算分'"></component>
                        <table class="table">
                            <component is="naive-input-text" ref="player1" :label="'选手1'"
                                @text-input-changed="recalTotal">
                            </component>
                            <component is="naive-input-text" ref="player2" :label="'选手2'"
                                @text-input-changed="recalTotal">
                            </component>
                            <component is="naive-input-text" ref="player3" :label="'选手3'"
                                @text-input-changed="recalTotal">
                            </component>
                        </table>
                        <div class="summary">总分：{{ total_player }}</div>
                    </div>
                </div>
            </div>
            <h1 style="text-align: center;">团队总分：{{ _teamtotal }} </h1>
            <component is="bigsubtitle" :text="'个人得分'"></component>
            <div class="app-column-container">
                <div class="app-column-1">


                    <div>
                        <component is="subtitle" :text="'特殊关卡'"></component>
                        <table>
                            <component is="input-text" ref="special1" :label="'劫虚济实(无漏)'" :multiplier="30"
                                @text-input-changed="recalTotal">
                            </component>
                            <component is="input-text" ref="special2" :label="'(紧急)战场侧面(无漏)'" :multiplier="50"
                                @text-input-changed="recalTotal">
                            </component>
                            <component is="input-text" ref="special3" :label="'(紧急)鸭速公路(无漏)'" :multiplier="30"
                                @text-input-changed="recalTotal">
                            </component>
                        </table>
                        <div class="summary">总分：{{ total_speical }} </div>
                    </div>
                    <div>
                        <component is="subtitle" :text="'紧急关卡'"></component>
                        <table class="table">
                            <component is="input-text" ref="urgent_cdbx_qc" :label="'拆东补西(清刺)'" :multiplier="15"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="urgent_yxqc_qc" :label="'有序清场(清刺)'" :multiplier="20"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="urgent_dqyp" :label="'大棋一盘'" :multiplier="30"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="urgent_dqyp_wd" :label="'大棋一盘(无盾)'" :multiplier="50"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="urgent_klmd" :label="'溃乱魔典'" :multiplier="40"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="urgent_nddc_qc" :label="'年代断层(清刺)'" :multiplier="40"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="urgent_jxdc" :label="'假想对冲'" :multiplier="30"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="urgent_wztm" :label="'巫咒同盟'" :multiplier="30"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="urgent_xhyd" :label="'猩红甬道'" :multiplier="60"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="urgent_mqgs" :label="'谋求共识 '" :multiplier="60"
                                @text-input-changed="recalTotal"></component>
                            <component is="input-text" ref="urgent_ssdkq" :label="'神圣的渴求'" :multiplier="60"
                                @text-input-changed="recalTotal"></component>
                        </table>
                        <div class="summary">总分：{{ total_urgent }}</div>
                    </div>

                    <div>
                        <component is="subtitle" :text="'结算分'"></component>
                        <table class="table">
                            <component is="naive-input-text" ref="settlement_" :label="''"
                                @text-input-changed="recalTotal">
                            </component>
                        </table>
                    </div>
                </div>
                <div class="app-column-2">
                    <div>
                        <component is="subtitle" :text="'结局情况'"></component>
                        <table class="table">
                            <tr>
                                <td>
                                    <component is="single-tick" ref="end1" :label="'或然面纱'" :multiplier="40"
                                        @tick-changed="recalTotal"></component>
                                </td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>
                                    <component is="single-tick" ref="end2" :label="'离歌的庭院'" :multiplier="50"
                                        @tick-changed="recalTotal"></component>
                                </td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>
                                    <component is="single-tick" ref="end3" :label="'紧急授课'" :multiplier="100"
                                        @tick-changed="recalTotal"></component>
                                </td>
                                <td>
                                    <component is="single-tick" ref="end_chaos3" :label="'混乱状态'" :multiplier="20"
                                        @tick-changed="recalTotal"></component>
                                </td>
                                <td>
                                    <component is="single-tick" ref="end_special3" :label="'奇观年代'" :multiplier="50"
                                        @tick-changed="recalTotal"></component>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <component is="single-tick" ref="end4" :label="'朝谒'" :multiplier="250"
                                        @tick-changed="recalTotal"></component>
                                </td>
                                <td>
                                    <component is="single-tick" ref="end_chaos4" :label="'混乱状态'" :multiplier="50"
                                        @tick-changed="recalTotal"></component>
                                </td>
                                <td>
                                    <component is="single-tick" ref="end_special4" :label="'奇观年代'" :multiplier="50"
                                        @tick-changed="recalTotal"></component>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <component is="single-tick" ref="end5" :label="'圣城'" :multiplier="300"
                                        @tick-changed="recalTotal"></component>
                                </td>
                                <td>
                                    <component is="single-tick" ref="end_chaos5" :label="'混乱状态'" :multiplier="50"
                                        @tick-changed="recalTotal"></component>
                                </td>
                                <td>
                                    <component is="single-tick" ref="end_special5" :label="'奇观年代'" :multiplier="50"
                                        @tick-changed="recalTotal"></component>
                                </td>
                            </tr>
                        </table>
                        <div class="summary">总分：{{ total_end }} </div>
                    </div>
                    <div>
                        <component is="subtitle" :text="'年代紧急加分'"></component>
                        <div style="text-align: center;">取最高！！！</div>
                        <table>
                            <td>
                                    <component is="input-text" ref="era1_1" :label="'天灾年代 I'" :multiplier="3"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era2_1" :label="'金融年代 I'" :multiplier="10"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era3_1" :label="'拥挤年代 I'" :multiplier="5"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era4_1" :label="'奇观年代 I'" :multiplier="5"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era5_1" :label="'苦难年代 I'" :multiplier="10"
                                        @text-input-changed="recalTotal"></component>
                            </td>
                            <td>
                                    <component is="input-text" ref="era1_2" :label="'II'" :multiplier="5"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era2_2" :label="'II'" :multiplier="15"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era3_2" :label="'II'" :multiplier="10"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era4_2" :label="'II'" :multiplier="10"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era5_2" :label="'II'" :multiplier="20"
                                        @text-input-changed="recalTotal"></component>
                            </td>
                            <td>
                                    <component is="input-text" ref="era1_3" :label="'III'" :multiplier="10"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era2_3" :label="'III'" :multiplier="30"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era3_3" :label="'III'" :multiplier="15"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era4_3" :label="'III'" :multiplier="30"
                                        @text-input-changed="recalTotal"></component>
                                    <component is="input-text" ref="era5_3" :label="'III'" :multiplier="50"
                                        @text-input-changed="recalTotal"></component>
                            </td>
                        </table>
                        <div class="summary">总分：{{ total_era }}</div>
                    </div>
                </div>
            </div>
            <h1 style="text-align: center;">选手总分：{{ _total }} </h1>
        </div>
    </div>
</template>

<script>
import InputText from './components/input-text.vue';
import SingleTick from './components/single-tick.vue';
import Subtitle from './components/subtitle.vue';
import NaiveInputText from './components/naive-input-text.vue';
import Bigsubtitle from './components/bigsubtitle.vue';

export default {
    components: {
        InputText,
        SingleTick,
        Subtitle,
        NaiveInputText,
        Bigsubtitle
    },
    data() {
        return {
            total_ban: 0,
            total_coins: 0,
            total_player: 0,
            _teamtotal: 0,
            initial_value: 0,
            total_end: 0,
            total_urgent: 0,
            total_penalty: 0,
            total_settlement: 0,
            total_era: 0,
            _total: 0
        };
    },
    methods: {
        recalTotal(newResult) {
            // 更新 result 的值
            let ban_sum = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('ban'))
                .reduce((total, ref) => total + this.$refs[ref].multiplier, 0);
            let ban_sub = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('ban'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);
            let extra = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('extrasix'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);
            this.total_ban = ban_sum * 2 - ban_sub + 500 - extra;

            let coins_sum = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('coins'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            if (coins_sum > 150) {
                this.total_coins = (coins_sum - 150) * (-40);
            } else {
                this.total_coins = 0;
            }

            this.total_player = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('player'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this.total_end = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('end'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this.total_urgent = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('urgent'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this.total_speical = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('special'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this.total_settlement = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('settlement'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this.total_era = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('era'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this._total = this.total_end + this.total_era
                + this.total_urgent + this.total_speical
                + this.total_settlement;

            this._teamtotal = this.total_ban + this.total_coins + this.total_player;
        }
    },
    computed: {
    }
};
</script>

<style>
.app-container {
    padding-top: 600px;
    /* background-color: #000; */
    background-image: url('assets/background.jpg');
    background-size: cover;
}

.team-column-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.team-column-1 {
    flex: 20;
    align-self: flex-start;
    margin-left: 100px;
    /* 调整边距 */
}

.team-column-2 {
    flex: 20;
    align-self: flex-start;
    margin-right: 100px;
    /* 调整边距 */
}

.app-column-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

@media (min-width: 1200px) {

    /* 当屏幕宽度大于或等于 1200px 时 */
    .team-column-container {
        flex-direction: row;
        /* 变为两列 */
    }
}

@media (min-width: 1200px) {

    /* 当屏幕宽度大于或等于 1200px 时 */
    .app-column-container {
        flex-direction: row;
        /* 变为三列 */
    }
}

.app-column-1 {
    flex: 18;
    align-self: flex-start;
}

.app-column-2 {
    flex: 30;
    align-self: flex-start;
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
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    /* background-color: #000; */
    /* 如果需要，可以添加这一行来使背景图片覆盖整个元素 */
    color: #aec5d7;
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
