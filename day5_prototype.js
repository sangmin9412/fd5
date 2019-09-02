function 갈아넣는다(worker) {
  if(!worker.job) throw new Error('직업이 없어요 못갈아요!');

  return worker.work();
  /*switch (worker.job) {
    case 'developer': return { name: '어플리케이션' };
    case 'designer': return { name: 'PSD' };
    default : return null;
  }*/
}

function Developer(name) {
  this.name = name;
  this.hp = 4;
  this.job = 'developer';
}
Developer.prototype.work = function () {
  console.log(this.name + ' is working');
  if (this.hp) {
    this.hp--;
    return { name: '웹어플리케이션'};
  }
  return null;
};

function main() {
  var dev1 = {
    name: 'suho',
    job: 'developer',
    work: function() {
      console.log(dev1.name + ' is working');
      return { name: '웹어플리케이션'}
    }
  };
  var dev2 = new Developer('jonghwan');
  var dev3 = new Developer('sunjung');
  var designer1 = {
    job: 'designer',
    work: function() {
      return { name: 'PSD'}
    }
  };
  var resultDev1 = 갈아넣는다(dev1);
  갈아넣는다(dev2);
  갈아넣는다(dev2);
  갈아넣는다(dev2);
  var resultDev11 = 갈아넣는다(dev2);갈아넣는다(dev2);
  console.log(resultDev11);
  var resultDev2 = 갈아넣는다(dev2);
  console.log(resultDev2);

  var resultDes1 = 갈아넣는다(designer1);

  console.log(dev1);
  console.log(dev2);
  console.log(dev3);
  console.log(resultDes1);
}

main();
