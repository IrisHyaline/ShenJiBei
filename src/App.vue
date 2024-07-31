<!-- ParentComponent.vue -->

<template>
    <div class="app-container">
        <div class="app">
            <div>
                <h1 style="text-align: center;">蜀道行计算器</h1>
            </div>
            <component is="bigsubtitle" :text="'团队得分'"></component>
            <div class="centered-select">
                <select v-model="selectedOption" class="custom-select">
                    <option value="" selected disabled>队伍名称</option>
                    <option value="team1">队伍1</option>
                    <option value="team2">队伍2</option>
                    <option value="team3">队伍3</option>
                    <option value="team4">队伍4</option>
                </select>
            </div>
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
            <h1 style="text-align: center;">{{ selectedOption }}团队总分：{{ _teamtotal }} </h1>
            <component is="bigsubtitle" :text="'个人得分'"></component>
            <div class="app-column-container">
                <div class="app-column-1">


                    <div>
                        <component is="subtitle" :text="'特殊关卡'"></component>
                        <table>
                            <component is="input-text" ref="special1" :label="'劫虚济实'" :multiplier="30"
                                @text-input-changed="recalTotal">
                            </component>
                            <component is="input-text" ref="special2" :label="'(紧急)战场侧面'" :multiplier="50"
                                @text-input-changed="recalTotal">
                            </component>
                            <component is="input-text" ref="special3" :label="'(紧急)鸭速公路'" :multiplier="30"
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
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>
                                    <component is="single-tick" ref="end2" :label="'离歌的庭院'" :multiplier="50"
                                        @tick-changed="recalTotal"></component>
                                </td>
                                <td>&nbsp;</td>
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
                                <td>
                                    <component is="single-tick" ref="end_mowang3" :label="'魔王年代'" :multiplier="20"
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
                                <td>
                                    <component is="single-tick" ref="end_mowang4" :label="'魔王年代'" :multiplier="50"
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
                                <td>
                                    <component is="single-tick" ref="end_mowang5" :label="'魔王年代'" :multiplier="50"
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
                                <component is="input-text" ref="era1_1" :label="'天灾年代 I'" :multiplier="5"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era2_1" :label="'金融年代 I'" :multiplier="10"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era3_1" :label="'拥挤年代 I'" :multiplier="15"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era4_1" :label="'奇观年代 I'" :multiplier="10"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era5_1" :label="'苦难年代 I'" :multiplier="20"
                                    @text-input-changed="recalTotal"></component>
                            </td>
                            <td>
                                <component is="input-text" ref="era1_2" :label="'II'" :multiplier="10"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era2_2" :label="'II'" :multiplier="20"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era3_2" :label="'II'" :multiplier="25"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era4_2" :label="'II'" :multiplier="15"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era5_2" :label="'II'" :multiplier="40"
                                    @text-input-changed="recalTotal"></component>
                            </td>
                            <td>
                                <component is="input-text" ref="era1_3" :label="'III'" :multiplier="15"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era2_3" :label="'III'" :multiplier="40"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era3_3" :label="'III'" :multiplier="40"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era4_3" :label="'III'" :multiplier="40"
                                    @text-input-changed="recalTotal"></component>
                                <component is="input-text" ref="era5_3" :label="'III'" :multiplier="70"
                                    @text-input-changed="recalTotal"></component>
                            </td>
                        </table>
                        <div class="summary">总分：{{ total_era }}</div>
                    </div>
                </div>
            </div>
            <h1 style="text-align: center;">选手总分：{{ _total }} </h1>
            <component is="bigsubtitle" :text="'年代说明'"></component>
            <div class="info-column-container">
                <div class="info-column-1">
                    <div>
                        <component is="subtitle" :text="'天灾年代'"></component>
                        <p>I 清理至少2根年代之刺或饮泣之刺 +5分</p>
                        <p>II 清理至少3根年代之刺或饮泣之刺 +10分</p>
                        <p>III 清理至少4根年代之刺或饮泣之刺 +15分</p>
                    </div>
                    <div>
                        <component is="subtitle" :text="'金融年代'"></component>
                        <p>I 全程无漏通关 +10分</p>
                        <p>II 持有巴别塔誓言或思绪混乱进入战斗并无漏 +20分</p>
                        <p>III <b>同时</b>持有巴别塔誓言<b>和</b>思绪混乱进入战斗并无漏 +40分</p>
                    </div>
                    <div>
                        <component is="subtitle" :text="'拥挤年代'"></component>
                        <p>I 同时部署人数小于等于3完成战斗 +15分</p>
                        <p>II 同时部署人数小于等于3无漏过关 +25分</p>
                        <p>III 同时部署人数小于等于2无漏过关 +40分</p>
                    </div>
                </div>
                <div class="info-column-2">
                    <div>
                        <component is="subtitle" :text="'奇观年代'"></component>
                        <p>I 未使用灵感进入战斗并胜利 +10分</p>
                        <p>II 未使用灵感进入战斗并全程无漏通关 +20分</p>
                        <p>III 未使用灵感进入战斗并全程无漏通关，且战斗包含至少一个领袖级敌人 +40分</p>
                    </div>
                    <div>
                        <component is="subtitle" :text="'苦难年代'"></component>
                        <p>I 在药枚、筑墙、活木甲不生效的情况下完成战斗 +20分</p>
                        <p>II 在药枚、筑墙、活木甲不生效的情况下<b>无漏</b>完成战斗 +40分</p>
                        <p>III 在药枚、筑墙、活木甲不生效的情况下干员<b>不主动撤退或被击倒</b><b>无漏</b>完成战斗 +70分</p>
                    </div>
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
            selectedOption: '',
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
.centered-select {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.custom-select {
    padding: 10px;
    font-size: 16px;
    background: url('../assets/input.png') no-repeat right center;
    background-size: 20px auto;/* 调整背景图片的大小 */
    -webkit-appearance: none;/* 隐藏默认的下拉箭头 */
    -moz-appearance: none;/* 隐藏默认的下拉箭头 */
    appearance: none;/* 隐藏默认的下拉箭头 */
    color: #d7aebe;/* 修改字体颜色 */
    border: none;/* 去掉白色边框 */
    font-size: 24px;
}

.select {
    padding: 10px;
    font-size: 16px;
}

.app-container {
    padding-top: 1100px;
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
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    /* background-color: #000; */
    /* 如果需要，可以添加这一行来使背景图片覆盖整个元素 */
    color: #d7aebe;
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
