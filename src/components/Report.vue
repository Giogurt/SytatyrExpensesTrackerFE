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
            <v-container v-if="reportDate === 'Report by Day'">
              <v-divider />
              <v-simple-table absolute="true">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th id="tableDate" class="text-center">Date</th>
                      <th id="tableAmount" class="text-center">Amount</th>
                      <th id="tableRecipient" class="text-center">Recipient</th>
                      <th id="tableCategory" class="text-center">Category</th>
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
                      <td class="text-center">{{ overview.expensesTotal }}</td>
                      <td class="text-center">{{ overview.mainRecipient }}</td>
                      <td class="text-center">{{ overview.mainCategory }}</td>
                      <td class="text-center">{{ overview.mainMethod }}</td>
                      <td class="text-center">{{ overview.highestExpense }}</td>
                      <td class="text-center">{{ overview.lowestExpense }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-divider />
            </v-container>

            <v-container class="pa-ma">
              <v-row align="center" d-flex justify-space-between mb-6>
                <v-col cols="6" align="center">
                  <v-btn elevation="2" rounded>Export to PDF</v-btn>
                </v-col>
                <v-col cols="6" align="center">
                  <v-btn elevation="2" rounded>Send by Email</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <v-container />
    <v-container />
    <v-container />
  </div>
</template>

<script>
export default {
  name: "Report",
  props: {
    expenses: [],
  },
  data: () => ({
    items: ["Report by Day", "Report by Month"],
    reportDate: "Report by Day",
    overview: {
      id: 0,
      expensesTotal: 1000,
      mainRecipient: "Walmart",
      mainCategory: "Carros",
      mainMethod: "Fisico",
      highestExpense: 999,
      lowestExpense: 1,
    },
  }),
};
</script>
<style></style>
