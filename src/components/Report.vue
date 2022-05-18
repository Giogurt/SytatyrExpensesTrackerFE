<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" align="center">
          <v-container fluid>
            <v-select
              v-model="reportDate"
              :items="items"
              label="Select by day or month"
              solo
            ></v-select>
            <vue-html2pdf
              :show-layout="true"
              :float-layout="false"
              :enable-download="true"
              :preview-modal="false"
              :paginate-elements-by-height="1400"
              filename="expensesReport"
              :pdf-quality="2"
              :manual-pagination="false"
              pdf-format="a4"
              pdf-orientation="portrait"
              pdf-content-width="100%"
              @hasStartedGeneration="hasStartedGeneration()"
              @hasGenerated="hasGenerated($event)"
              ref="html2Pdf"
            >
              <section slot="pdf-content">
                <v-container v-if="reportDate === 'Report by Day'">
                  <v-divider />
                  <v-simple-table absolute="true">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th id="tableDate" class="text-center">Date</th>
                          <th id="tableAmount" class="text-center">Amount</th>
                          <th id="tableRecipient" class="text-center">
                            Recipient
                          </th>
                          <th id="tableCategory" class="text-center">
                            Category
                          </th>
                          <th id="tableReason" class="text-center">Reason</th>
                          <th id="tableMethod" class="text-center">Method</th>
                          <th id="tableNotes" class="text-center">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in expenses" :key="item.id">
                          <td class="text-center !important">
                            {{ item.date }}
                          </td>
                          <td class="text-center">{{ item.amount }}</td>
                          <td class="text-center">{{ item.recipient }}</td>
                          <td class="text-center">{{ item.category }}</td>
                          <td class="text-center">{{ item.reason }}</td>
                          <td class="text-center">{{ item.method }}</td>
                          <td class="text-center">{{ item.notes }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <v-divider />
                </v-container>
                <v-container v-if="reportDate === 'Report by Day'">
                  <v-divider />
                  <v-simple-table absolute="true">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th id="tableExpensesTotal" class="text-center">
                            Expenses Total
                          </th>
                          <th id="tableMainRecipient" class="text-center">
                            Main Recipient
                          </th>
                          <th id="tableMainCategory" class="text-center">
                            Main Category
                          </th>
                          <th id="tableMainMethod" class="text-center">
                            Main Method
                          </th>
                          <th id="tableHighestExpense" class="text-center">
                            Highest Expense
                          </th>
                          <th id="tableLowestExpense" class="text-center">
                            Lowest Expense
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center">
                            {{ total }}
                          </td>
                          <td class="text-center">
                            {{ mainRecipient }}
                          </td>
                          <td class="text-center">
                            {{ mainCategory }}
                          </td>
                          <td class="text-center">
                            {{ mainMethod }}
                          </td>
                          <td class="text-center">
                            {{ max }}
                          </td>
                          <td class="text-center">
                            {{ min }}
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <v-divider />
                </v-container>

                <v-container v-if="reportDate === 'Report by Month'">
                  <v-divider />
                  <v-simple-table absolute="true">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th id="tableDate" class="text-center">Date</th>
                          <th id="tableAmount" class="text-center">Amount</th>
                          <th id="tableRecipient" class="text-center">
                            Recipient
                          </th>
                          <th id="tableCategory" class="text-center">
                            Category
                          </th>
                          <th id="tableReason" class="text-center">Reason</th>
                          <th id="tableMethod" class="text-center">Method</th>
                          <th id="tableNotes" class="text-center">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in monthExpenses" :key="item.id">
                          <td class="text-center !important">
                            {{ item.date }}
                          </td>
                          <td class="text-center">{{ item.amount }}</td>
                          <td class="text-center">{{ item.recipient }}</td>
                          <td class="text-center">{{ item.category }}</td>
                          <td class="text-center">{{ item.reason }}</td>
                          <td class="text-center">{{ item.method }}</td>
                          <td class="text-center">{{ item.notes }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <v-divider />
                </v-container>
                <v-container v-if="reportDate === 'Report by Month'">
                  <v-divider />
                  <v-simple-table absolute="true">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th id="tableExpensesTotal" class="text-center">
                            Expenses Total
                          </th>
                          <th id="tableMainRecipient" class="text-center">
                            Main Recipient
                          </th>
                          <th id="tableMainCategory" class="text-center">
                            Main Category
                          </th>
                          <th id="tableMainMethod" class="text-center">
                            Main Method
                          </th>
                          <th id="tableHighestExpense" class="text-center">
                            Highest Expense
                          </th>
                          <th id="tableLowestExpense" class="text-center">
                            Lowest Expense
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center">
                            {{ total }}
                          </td>
                          <td class="text-center">
                            {{ mainRecipient }}
                          </td>
                          <td class="text-center">
                            {{ mainCategory }}
                          </td>
                          <td class="text-center">
                            {{ mainMethod }}
                          </td>
                          <td class="text-center">
                            {{ max }}
                          </td>
                          <td class="text-center">
                            {{ min }}
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <v-divider />
                </v-container>
              </section>
            </vue-html2pdf>
            <v-container class="pa-ma">
              <v-row align="center" d-flex justify-space-between mb-6>
                <v-col cols="6" align="center">
                  <v-btn elevation="2" rounded @click="generateReport()"
                    >Export to PDF</v-btn
                  >
                </v-col>
                <v-col cols="6" align="center">
                  <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="#6A8CAF"
                          elevation="2"
                          rounded
                          dark
                          v-bind="attrs"
                          v-on="on"
                        >
                          Send by Email
                        </v-btn>
                      </template>
                      <template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h5">Send report</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-form
                                ref="emailForm"
                                v-model="valid"
                                lazy-validation
                              >
                                <v-row>
                                  <v-col cols="12">
                                    <v-text-field
                                      v-model="emailFrom"
                                      name="email"
                                      :rules="emailFormRules"
                                      label="From"
                                      required
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12">
                                    <v-text-field
                                      v-model="emailTo"
                                      name="toEmail"
                                      :rules="emailFormRules"
                                      label="To"
                                      required
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="12">
                                    <v-text-field
                                      v-model="emailSubject"
                                      name="subject"
                                      :rules="emailTextRules"
                                      label="Subject"
                                      required
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                                <v-row>
                                  <v-textarea
                                    v-model="emailText"
                                    name="emailText"
                                    label="Email text body"
                                    value=""
                                  ></v-textarea>
                                </v-row>
                              </v-form>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              rounded
                              text
                              @click="dialog = false"
                            >
                              Close
                            </v-btn>
                            <v-btn
                              color="blue darken-1"
                              rounded
                              text
                              @click="validate()"
                            >
                              Send
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-alert v-if="successAlert === true" type="success" text dismissible>
      Success! The email has been sent to the mail.
    </v-alert>
    <v-container />
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
export default {
  name: "Report",
  props: {
    expenses: [],
    monthExpenses: [],
  },
  computed: {
    max() {
      let temp = this.expenses[0].amount;
      this.expenses.forEach((element) => {
        if (temp < element.amount) {
          temp = element.amount;
        }
      });

      return temp;
    },
    min() {
      let temp = this.expenses[0].amount;
      this.expenses.forEach((element) => {
        if (temp > element.amount) {
          temp = element.amount;
        }
      });

      return temp;
    },
    total() {
      let temp = 0;
      this.expenses.forEach((element) => {
        temp = temp + element.amount;
      });

      return temp;
    },
    mainMethod() {
      if (this.expenses.length == 0) 
        return null;

      var expensesMethods = [];

      this.expenses.forEach((element) => {
        expensesMethods.push(element.method);
      })

      var modeMap = {};
      var maxElement = expensesMethods[0], maxCount = 1;

      for (var i = 0; i < expensesMethods.length; i++) {
        var elementExpense = expensesMethods[i];
        if (modeMap[elementExpense] == null) 
          modeMap[elementExpense] = 1;
        else 
          modeMap[elementExpense]++;
        if (modeMap[elementExpense] > maxCount) {
          maxElement = elementExpense;
          maxCount = modeMap[elementExpense];
        }
      }

      return maxElement;
    },
    mainRecipient() {
      if (this.expenses.length == 0) 
        return null;

      var expensesRecipients = [];

      this.expenses.forEach((element) => {
        expensesRecipients.push(element.recipient);
      })

      var modeMap = {};
      var maxElement = expensesRecipients[0], maxCount = 1;

      for (var i = 0; i < expensesRecipients.length; i++) {
        var elementExpense = expensesRecipients[i];
        if (modeMap[elementExpense] == null) 
          modeMap[elementExpense] = 1;
        else 
          modeMap[elementExpense]++;
        if (modeMap[elementExpense] > maxCount) {
          maxElement = elementExpense;
          maxCount = modeMap[elementExpense];
        }
      }

      return maxElement;
    },
    mainCategory() {
      if (this.expenses.length == 0) 
        return null;

      var expensesCategories = [];

      this.expenses.forEach((element) => {
        expensesCategories.push(element.category);
      })

      var modeMap = {};
      var maxElement = expensesCategories[0], maxCount = 1;

      for (var i = 0; i < expensesCategories.length; i++) {
        var elementExpense = expensesCategories[i];
        if (modeMap[elementExpense] == null) 
          modeMap[elementExpense] = 1;
        else 
          modeMap[elementExpense]++;
        if (modeMap[elementExpense] > maxCount) {
          maxElement = elementExpense;
          maxCount = modeMap[elementExpense];
        }
      }

      return maxElement;
    },
  },
  data: () => ({
    dialog: false,
    successAlert: false,
    // Variables used for selection of options of dates
    items: ["Report by Day", "Report by Month"],
    reportDate: "Report by Day",
    // Variables used for validation of the content for an email
    valid: true,
    emailFrom: "",
    emailTo: "",
    emailFormRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    emailSubject: "",
    emailTextRules: [
      (v) => !!v || "Subject is required",
      (v) =>
        (v && v.length >= 10) || "Subject must be greater than 10 characters",
    ],
    emailText: "",
  }),
  methods: {
    // Method used to generate the pdfs, after pressing the button of "export to pdf" for example.
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    // Method used to validate the inputs of the email form in the dialog.
    validate() {
      if (this.$refs.emailForm.validate()) {
        this.dialog = false;
        this.successAlert = true;
      }
    },
  },
  components: {
    VueHtml2pdf,
  },
  mounted() {
    this.max();
    this.min();
    this.total();
    this.mainMethod();
    this.mainRecipient();
    this.mainCategory();
  },
};
</script>
<style></style>
