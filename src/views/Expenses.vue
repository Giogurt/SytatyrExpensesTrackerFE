<template>
  <div>
    <Header />
    <v-container>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-btn elevation="2" rounded color="rgb(106, 140, 175)">New Expense</v-btn>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="monthSlection" label="Select by date" solo></v-select>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-simple-table absolute="true">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                <p class="font-size-table">
                  Id
                </p>
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
            <tr v-for="expense in expenses" :key="expense.id">
              <td>{{ expense.id }}</td>
              <td>{{ expense.date }}</td>
              <td>$ {{ expense.amount }}</td>
              <td>{{ expense.recipient }}</td>
              <td>{{ expense.category }}</td>
              <td>{{ expense.reason }}</td>
              <td>{{ expense.method }}</td>
              <td>{{ expense.notes }}</td>
              <v-btn class="ma-2" outlined small fab color="rgb(106, 140, 175)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="ma-2" outlined small fab color="rgb(106, 140, 175)">
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
   
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
            <tr >
              <td>$ {{totalExpenses}}</td>
              <td>$ {{highestExpense}}</td>
              <td>$ {{lowestExpense}}</td>

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


export default {
  name: "Expenses",
  components: {
    Header,
    Footer
  },

  data() {
    return {
      expenses: [
        {
          id: 1,
          date: "711",
          amount: 100,
          recipient: "Caffenio",
          category: "Comida",
          reason: "Tenia hambre",
          method: "Paypal",
          notes: "No lo haré de nuevo",
        },
        {
          id: 2,
          date: "711",
          amount: 460,
          recipient: "Caffenio",
          category: "Basketball",
          reason: "Tenia hambre",
          method: "Paypal",
          notes: "No lo haré de nuevo",
        },
        {
          id: 3,
          date: "711",
          amount: 250,
          recipient: "Caffenio",
          category: "Football",
          reason: "Tenia hambre",
          method: "Paypal",
          notes: "No lo haré de nuevo",
        },
      ],

      monthSlection: ['See expenses Today', 'See expenses this Month'],

      highestExpense: '',
      lowestExpense: '',
      totalExpenses: ''
    }
  },

  methods: {
    getMax(){
      let temp = this.expenses[0].amount;
      this.expenses.forEach((element) => {
        if(temp < element.amount){
          temp = element.amount;
        }
      });

      this.highestExpense = temp;
    },
    getMin(){
      let temp = this.expenses[0].amount;
      this.expenses.forEach((element) => {
        if(temp > element.amount){
          temp = element.amount;
        }
      });

      this.lowestExpense = temp;

    },
    getTotal(){
      let temp = 0;
      this.expenses.forEach((element) => {
        temp = temp + element.amount;
      });

      this.totalExpenses = temp;

    }
  },

  mounted: function() {
    this.getMax();
    this.getMin();
    this.getTotal();
  }
}

</script>
<style>
.font-size-table {
  font-size: 15px !important;
  font-weight: bolder !important;
}
</style>