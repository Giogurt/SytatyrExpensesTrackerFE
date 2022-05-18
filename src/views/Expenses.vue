<template>
  <div>
    <Header />
    <v-container>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-btn @click="dialog = true" elevation="2" rounded color="rgb(106, 140, 175)">New Expense</v-btn>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select v-model="dateSelector" :items="monthSlection" label="Select by date" solo @change="onChange($event)"></v-select>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-simple-table absolute="true">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Id
              </th>
              <th class="text-left">
                Date
              </th>
              <th class="text-left">
                Amount
              </th>
              <th class="text-left">
                Recipient
              </th>
              <th class="text-left">
                Category
              </th>
              <th class="text-left">
                Reason
              </th>
              <th class="text-left">
                Method
              </th>
              <th class="text-left">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(expense, index) in expenses" :key="expense.id">
              <td>{{ expense.id }}</td>
              <td>{{ expense.date }}</td>
              <td>$ {{ expense.amount }}</td>
              <td>{{ expense.recipient }}</td>
              <td>{{ expense.category }}</td>
              <td>{{ expense.reason }}</td>
              <td>{{ expense.method }}</td>
              <td>{{ expense.notes }}</td>
              <v-btn class="ma-2" outlined small fab color="rgb(106, 140, 175)" @click="editExpense(index)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="ma-2" outlined small fab color="rgb(106, 140, 175)" @click="deleteExpense(index)">
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>

    <v-dialog v-model="dialog" width="800" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add Expense</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="recipientAdd" label="Recipient" hint="The entity which is going to recieve the money" required>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="amountAdd" label="Amount" hint="Amount of money expended" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field  v-model="reasonAdd" label="Reason" hint="Reason to expend the money" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="notesAdd"  label="Notes" hint="Extra information" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select v-model="categoryAdd"  :items="categories" label="Category" required></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select v-model="methodAdd" :items="paymentMethods" label="Method" required></v-select>
              </v-col>
              <v-row justify="center">
                <v-date-picker v-model="pickerAdd"></v-date-picker>
              </v-row>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="6" align="center">
            <v-btn elevation="2" rounded color="rgb(247, 122, 114)" @click="dialog = false">Cancel</v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="6" align="center">
            <v-btn elevation="2" rounded color="rgb(238, 249, 191)" @click="addNewExpense()">Save</v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog2" width="800" persistent>
      <v-card>
        <v-card-title>
          <span class="text-h5">Modify Expense</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="recipient" label="Recipient"
                  hint="The entity which is going to recieve the money" required>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="amount" label="Amount" hint="Amount of money expended" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="reason" label="Reason" hint="Reason to expend the money" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="notes" label="Notes" hint="Extra information" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select v-model="category" :items="categories" label="Category" required></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select v-model="method" :items="paymentMethods" label="Method" required></v-select>
              </v-col>
              <v-row justify="center">
                <v-date-picker v-model="picker" color="rgb(106, 140, 175)"></v-date-picker>
              </v-row>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="6" align="center">
            <v-btn elevation="2" rounded color="rgb(247, 122, 114)" @click="dialog2 = false">Cancel</v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="6" align="center">
            <v-btn elevation="2" rounded color="rgb(238, 249, 191)" @click="updateExpense()">Save</v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-container>
      <v-simple-table absolute="true">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Total Expended
              </th>
              <th class="text-left">
                Highest Expense
              </th>
              <th class="text-left">
                Lowest Expense
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$ {{ total }}</td>
              <td>$ {{ max }}</td>
              <td>$ {{ min }}</td>

            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>

    <Footer />
  </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import { mapState } from 'vuex';
import { getAllExpenses, getDailyExpenses, getMonthlyExpenses, addNewEspense, updateExpense, deleteExpense} from '../services/ExpensesServices';


export default {
  name: "Expenses",
  components: {
    Header,
    Footer
  },

  computed: {
    ...mapState({
      token(state) {
        return state.token;
      },
      id(state) {
        return state.userId;
      }
    }),
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

  },

  data() {
    return {
      expenses: [],

      monthSlection: ['See all expenses', 'See expenses Today', 'See expenses this Month'],

      highestExpense: '',
      lowestExpense: '',
      totalExpenses: '',

      dialog: false,
      dialog2: false,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      categories: ['Housing', 'Food', 'Clothing', 'Peronal Care', 'Automobile', 'Property Tax', 'Utilities',
        'Entertainment', 'Unreimursed Business Expenses', 'Alimony (paid)', 'Child Support (paid)', 'Childrens Expenses',
        'Gifts', 'Charitable Contributions', 'Medical Expenses', 'Insurance', 'Credit cards', 'Other Liabilities'],
      paymentMethods: ['Credit', 'Debit', 'Cash', 'Check', 'Transfer'],
      idForEdition: '',
      dateSelector: 'See all expenses',

      recipientAdd: '',
      amountAdd: '',
      reasonAdd: '',
      pickerAdd: '',
      categoryAdd: '',
      methodAdd: '',
      notesAdd: '',
      expenseId:''
    }
  },

  methods: {

    editExpense(index) {
      this.dialog2 = true;
      this.expenseId = this.expenses[index].id;
      this.recipient = this.expenses[index].recipient;
      this.amount = this.expenses[index].amount;
      this.reason = this.expenses[index].reason;
      this.notes = this.expenses[index].notes;
      this.category = this.expenses[index].category;
      this.method = this.expenses[index].method;
      this.picker = this.expenses[index].date;
    },
    
    async getAllExpenses() {
      let response = await getAllExpenses(this.token, this.id);
      this.expenses = response;
      console.log(response);

    },

    async getDailyExpenses() {
      let response = await getDailyExpenses(this.token, this.id);
      this.expenses = response;
      console.log(response);

    },

    async getMonthlyExpenses() {
      let response = await getMonthlyExpenses(this.token, this.id);
      this.expenses = response;
      console.log(response);

    },

    async addNewExpense() {
      let response = await addNewEspense(this.token, this.id, this.recipientAdd, this.amountAdd, this.reasonAdd, this.categoryAdd, this.methodAdd, this.pickerAdd,this.notesAdd);
      this.dialog = false;
      console.log(response);
      this.$router.go();
    },

    async updateExpense() {
      let response = await updateExpense(this.token, this.expenseId, this.recipient, this.amount, this.reason, this.category, this.method, this.picker, this.notes);
      this.dialog2 = false;
      console.log(response);
      this.$router.go();
    },

    async deleteExpense(index) {
      this.expenseId = this.expenses[index].id;
      let response = await deleteExpense(this.token, this.expenseId);
      console.log(response);
      this.$router.go();
    },


  },

  watch: {
    dateSelector(date){
      if(date == 'See all expenses'){
        this.getAllExpenses();
      } else if(date == 'See expenses Today'){
        this.getDailyExpenses();
      }else if (date == 'See expenses this Month'){
        this.getMonthlyExpenses();
      }
    }
  },

  async mounted() {
    await this.getAllExpenses();
  }

}

</script>
<style>
.font-size-table {
  font-size: 15px !important;
  font-weight: bolder !important;
}
</style>