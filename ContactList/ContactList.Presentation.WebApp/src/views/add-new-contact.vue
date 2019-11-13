<template>
  <div>
    <h4 class="header-text">Fill in the details to add a new contact</h4>
    <div>
      <InputFormName :preInputName="preInputName" v-model="contactName" />
      <InputFormEmail :preInputEmail="preInputEmail" v-model="contactEmail" />
    </div>
    <div>
      <InputFormPhone :preInputEmail="preInputPhone" v-model="contactPhone" />
      <InputCheckbox v-model="isWhatsApp">The phone number is a WhatsApp number?</InputCheckbox>
    </div>
    <p v-if="message" class="error-message">{{ message }}&nbsp;</p>
    <div>
      <ConfirmButton @click="addContact">Confirm</ConfirmButton>
    </div>
  </div>
</template>

<script>
import InputFormName from "@/views/input-form-name.vue";
import InputFormEmail from "@/views/input-form-email.vue";
import InputFormPhone from "@/views/input-form-phone.vue";
import InputCheckbox from "@/components/inputs/input-checkbox.vue";
import ConfirmButton from "@/components/buttons/confirm-button.vue";
import ContactService from "@/services/api-services/contact-service.js";

export default {
  data() {
    return {
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      preInputName: "",
      preInputEmail: "",
      preInputPhone: "",
      message: "",
      isWhatsApp: false
    };
  },

  components: {
    InputFormName,
    InputFormEmail,
    InputFormPhone,
    InputCheckbox,
    ConfirmButton
  },

  methods: {
    addContact: function() {
      let self = this;

      if (self.contactName == "") {
        this.message = "Fill in the contact name.";
        return;
      }

      if (self.contactPhone == "" || self.contactEmail == "") {
        this.message =
          "At least one contact type is needed (e-mail or phone number).";
        return;
      }

      let phone = { number: this.contactPhone, isWhatsApp: this.isWhatsApp };
      let email = { emailAddress: this.contactEmail };
      ContactService.addNewContact(self.contactName, phone, email).then(
        function() {
          self.$router.push("/");
          location.reload();
        }
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/colors.less";

.header-text {
  font-size: 22px;
}

.error-message {
  margin-top: 10px;
  color: @ColorError;
  font-size: 16px;
}
</style>