<!-- ParentComponent.vue -->

<template>
    <div class="app">
        <div>
            <h3>临时招募</h3>
            <table class="table">
                <component is="input-text" ref="temp1" :label="'六星'" :multiplier="50" @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="temp2" :label="'五星'" :multiplier="20" @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="temp3" :label="'四星'" :multiplier="10" @text-input-changed="recalTotal">
                </component>
            </table>
            {{ total_temp }}
        </div>
        <div>
            <h3>关底与结局</h3>
            <table class="table">
                <component is="single-tick" ref="end1" :label="'巍峨银淞'" :multiplier="60" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="end2" :label="'深寒造像'" :multiplier="170" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="end3" :label="'萨米之熵'" :multiplier="100" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="end4" :label="'虚无之偶'" :multiplier="150" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="end5" :label="'园丁'" :multiplier="50" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="end6" :label="'哨兵'" :multiplier="350" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="end7" :label="'时光之砂'" :multiplier="120" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="end8" :label="'迈入永恒'" :multiplier="220" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="end9" :label="'呼吸'" :multiplier="60" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="end10" :label="'夺树者'" :multiplier="60" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="end11" :label="'无树篱之途'" :multiplier="300" @tick-changed="recalTotal">
                </component>
            </table>
            {{ total_end }}
        </div>
        <div>
            <h3>紧急关卡</h3>
            <table class="table">
                <component is="input-text" ref="urgent_bhyy" :label="'冰海疑影'" :multiplier="40"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_tstdwh" :label="'坍缩体的午后'" :multiplier="40"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_gsjg_plus" :label="'公司纠葛无漏路网'" :multiplier="40"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_srwj" :label="'生人勿进'" :multiplier="40"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_hldbx" :label="'混乱的表象'" :multiplier="50"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_qddd" :label="'求敌得敌'" :multiplier="50"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_hcwsh" :label="'何处无山海'" :multiplier="50"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_ylzz" :label="'乐理之灾'" :multiplier="70"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_ylzz_plus" :label="'乐理之灾无漏路网'" :multiplier="90"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_wzxj" :label="'亡者行军'" :multiplier="70"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_wzxj_plus" :label="'亡者行军无漏路网'" :multiplier="90"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_bnwr" :label="'本能污染'" :multiplier="70"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_bnwr_plus" :label="'本能污染无漏路网'" :multiplier="90"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_rzwkhj" :label="'人造物狂欢节'" :multiplier="120"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_sys" :label="'霜与沙'" :multiplier="40"
                    @text-input-changed="recalTotal"></component>
                <component is="input-text" ref="urgent_sldzd" :label="'生灵的终点'" :multiplier="100"
                    @text-input-changed="recalTotal"></component>
            </table>
            {{ total_urgent }}
        </div>
        <div>
            <h3>隐藏敌人（除正义使者）</h3>
            <table class="table">
                <component is="input-text" ref="hidden1" :label="'鸭'" :multiplier="20" @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="hidden2" :label="'狗'" :multiplier="20" @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="hidden3" :label="'熊'" :multiplier="20" @text-input-changed="recalTotal">
                </component>
            </table>
            {{ total_hidden }}
        </div>
        <div>
            <h3>藏品与密文板</h3>
            <table class="table">
                <component is="input-text" ref="collect1" :label="'藏品'" :multiplier="10"
                    @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="collect2" :label="'密文板'" :multiplier="10"
                    @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="collect3" :label="'空间碎片'" :multiplier="20"
                    @text-input-changed="recalTotal">
                </component>
            </table>
            {{ total_collect }}
        </div>
        <div>
            <h3>特殊关卡</h3>
            <table class="table">
                <component is="input-text" ref="special1" :label="'豪华车队高普尼克'" :multiplier="30"
                    @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="special2" :label="'豪华车队无漏'" :multiplier="50"
                    @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="special3" :label="'天途半道'" :multiplier="30"
                    @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="special4" :label="'夙愿将尝'" :multiplier="30"
                    @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="special5" :label="'惩罚'" :multiplier="30"
                    @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="special6" :label="'正义使者通过'" :multiplier="50"
                    @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="special7" :label="'正义使者鸭狗熊'" :multiplier="30"
                    @text-input-changed="recalTotal">
                </component>
                <component is="input-text" ref="special8" :label="'正义使者无漏'" :multiplier="200"
                    @text-input-changed="recalTotal">
                </component>
            </table>
            {{ total_speical }}
        </div>
        <div>
            <h3>ban 干员</h3>
            扣分制，招募了打勾！！！
            <table class="table">
                <component is="single-tick" ref="ban_men" :label="'玛恩纳'" :multiplier="50" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="ban_jian" :label="'锏'" :multiplier="50" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="ban_yns" :label="'伊内丝'" :multiplier="50" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="ban_jmdkss" :label="'缄默德克萨斯'" :multiplier="30"
                    @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="ban_qlryd" :label="'麒麟R夜刀'" :multiplier="30"
                    @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="ban_yywc" :label="'焰影苇草'" :multiplier="30" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="ban_cjayfl" :label="'纯烬艾雅法拉'" :multiplier="20"
                    @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="ban_zxskd" :label="'浊心斯卡蒂'" :multiplier="20"
                    @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="ban_tf" :label="'提丰'" :multiplier="20" @tick-changed="recalTotal">
                </component>
                <component is="single-tick" ref="ban_shu" :label="'黍'" :multiplier="20" @tick-changed="recalTotal">
                </component>
                <component is="input-text" ref="ban_tw" :label="'>四星铁卫'" :multiplier="30"
                    @text-input-changed="recalTotal">
                </component>
            </table>
            {{ total_ban }}
        </div>
        <div>
            <h3>惩罚扣分</h3>
            <table class="table">
                <component is="single-tick" ref="penalty_offline" :label="'掉线'" :multiplier="-50" @tick-changed="recalTotal">
                </component>
                <component is="input-text" ref="penalty_greed" :label="'取钱>20'" :multiplier="-50"
                    @text-input-changed="recalTotal">
                </component>
            </table>
            {{ total_penalty }}
        </div>
        选手总分：{{ _total }}
    </div>
</template>

<script>
import InputText from './components/input-text.vue';
import SingleTick from './components/single-tick.vue';

export default {
    components: {
        InputText,
        SingleTick
    },
    data() {
        return {
            initial_value: 0,
            total_temp: 0,
            total_hidden: 0,
            total_end: 0,
            total_urgent: 0,
            total_collect: 0,
            total_speical: 0,
            total_ban: 0,
            total_penalty: 0,
            _total : 0
        };
    },
    methods: {
        recalTotal(newResult) {
            // 更新 result 的值
            this.total_temp = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('temp'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this.total_end = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('end'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this.total_urgent = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('urgent'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this.total_hidden = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('hidden'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this.total_collect = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('collect'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this.total_speical = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('special'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            let ban_sum = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('ban'))
                .reduce((total, ref) => total + this.$refs[ref].multiplier, 0);
            let ban_sub = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('ban'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);
            this.total_ban = ban_sum - ban_sub;

            this.total_penalty = Object.keys(this.$refs)
                .filter(ref => ref.startsWith('penalty'))
                .reduce((total, ref) => total + this.$refs[ref].result, 0);

            this._total = this.total_temp + this.total_hidden + this.total_end + this.total_urgent + this.total_collect + this.total_speical + this.total_ban + this.total_penalty;
        }
    },
    computed: {
    }
};
</script>

<style>
.app {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

.button {
    display: inline-block;
    padding: 10px 20px;
    margin-top: 20px;
    color: #fff;
    background-color: #007BFF;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.total {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
}
</style>./components/input-text.vue
