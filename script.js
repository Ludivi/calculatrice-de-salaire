/* Composant racine */
const RootComponent = {
  /* Data properties */
  data() {
    return {
      annualGross: 0, // Brut annuel
      rate: 0.78, // Taux de charge salariale
    };
  },

  /* Méthodes */
  methods: {
    /**
     * Récupération de la valeur de l'input annuel brut à chaque saisie
     */
    handleAnnualGrossInput(e) {
      this.annualGross = e.target.value;
    },

    /**
     * Changement du statut du salarié
     */
    changeStatus(e) {
      if (e.target.checked) {
        this.rate = 0.75;
      } else {
        this.rate = 0.78;
      }
    },
  },

  /* Computed properties - Propriété calculées */
  computed: {
    /**
     * Propriété calculée du salaire mensuel brut
     */
    monthlyGross() {
      return this.annualGross / 12;
    },
    /**
     * Propriété calculée du salaire annuel net
     */
    annualNet() {
      return this.annualGross * this.rate;
    },
    monthlyNet() {
      return this.monthlyGross * this.rate;
    },
  },

  /* Watchers - Observateurs */
  watch: {
    /**
     * Observateur de la valeur annualGross
     */
    annualGross(newValue) {
      if (newValue > 28000) {
        alert("Votre salaire est supérieur au médian Français.");
      }
    },
  },
};

Vue.createApp(RootComponent).mount("#root");
