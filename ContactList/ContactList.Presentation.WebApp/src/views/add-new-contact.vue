<template>
    <div class="center">
        <b-card bg-variant="light">
            <b-form-group v-for="(line, index) in lines" v-bind:key="index"
                label-cols-lg="1"
                label="Phone Info"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0">
                <b-form inline>
                    <label class="sr-only" for="inline-form-input-number">Number</label>
                    <b-input id="inline-form-input-name"
                             class="mb-2 mr-sm-2 mb-sm-0"
                             v-model="line.number"
                             placeholder="Type phone number"></b-input>

                    <label class="sr-only" for="inline-form-input-type">Type</label>
                    <b-form-select class="mb-2 mr-sm-2 mb-sm-0 col-2" id="inline-form-input-username" v-model="line.phoneUsageType" :options="phoneTypes"></b-form-select>

                    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Is WhatsApp?</b-form-checkbox>

                    <b-input-group>
                        <b-btn pill class="mr-sm-2 mb-sm-0" variant="success" v-if="index + 1 === lines.length" @click="addLine">-</b-btn>
                        <b-btn pill variant="danger" @click="removeLine(index)">+</b-btn>
                    </b-input-group>
                </b-form>
            </b-form-group>
        </b-card>
    </div>
</template>

<script>
export default {

  name: 'PhoneNumberLine',
  data () {
    return {
      lines: [],
      blockRemoval: true,
      phoneTypes: [
        { text: 'Home', value: 'home' },
        { text: 'Work', value: 'work' },
        { text: 'Mobile', value: 'mobile' },
        { text: 'Fax', value: 'fax' }
      ],
      dddCodes: [
        { text: '11', value: '11'},
        { text: '21', value: '21' }
      ]
    }
  },
  watch: {
    lines () {
      this.blockRemoval = this.lines.length <= 1
    }
  },
  methods: {
    addLine () {
      let checkEmptyLines = this.lines.filter(line => line.number === null)
      if (checkEmptyLines.length >= 1 && this.lines.length > 0) return
      this.lines.push({
        countryCode: null,
        number: null,
        phoneUsageType: null
      })
    },
    removeLine (lineId) {
      if (!this.blockRemoval) this.lines.splice(lineId, 1)
    }
  },
  mounted () {
    this.addLine()
  }
}
</script>

<style lang="less" scoped>
@import "../styles/colors.less";

.pageWidth {
    width: 1256px;
}

.center {
  margin: auto;
  padding: 10px;
}

.header-text {
  font-size: 22px;
}

.error-message {
  margin-top: 10px;
  color: @ColorError;
  font-size: 16px;
}
</style>