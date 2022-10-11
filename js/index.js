new Vue({
    el: "#app",
    data: {
      yearArr: [],
      year: "",
      animals: [
        "鼠",
        "牛",
        "虎",
        "兔",
        "龙",
        "蛇",
        "马",
        "羊",
        "猴",
        "鸡",
        "狗",
        "猪",
      ],
    },
    methods: {
      getanimal: function (item) {
        return this.animals[(item - 1924) % 12];
      },
    },
    mounted: function () {
      this.year = new Date().getFullYear();
      let _year = 1980;
      for (let i = 0; i < 20; i++) {
        this.yearArr.push(_year);
        _year += 1;
      }
      this.yearArr.sort();
    },
  });