//先获取到class为check的所有input复选方框,包括全选方框在内
const checkBox = document.querySelectorAll('.check');//一共4个复选方框

//获取到商品前面的单个复原框3个singe
const singleBox = document.querySelectorAll('.single');//一共3个复选框

/* 获取所有class= line 的3行tr元素 */
const lineBox = document.querySelectorAll('.line');/* 一共3行，下标值对应0 ，1 */



/* -----------------------------------------div------left-------------------------------------------------------- */
//获取到class=left的元素div
const leftDiv = document.querySelector('.left');
//在leftDiv中获取到class=selected的span元素
const selectedSpan = leftDiv.querySelector('.selected');
//在selectedSpan中获取class=zero的元素span
const zeroBox = selectedSpan.querySelector('.zero');
/* -----------------------------------------div  right--------------------------------------------------------- */
const rightDiv = document.querySelector('.right');

const amountToSpan = rightDiv.querySelector(' .amountTo ');

const zeroAmountTo = amountToSpan.querySelector('.zeroAmountTo');
/* ---------------------------------------------third Cell--------------------------------------------------------------- */


/*商品单价-----------获取到class=thirdCell的td元素下面的class=zero的3个span元素  */
const thirdCellZero = document.querySelectorAll('.thirdCell  .zero')

/*获取class=fifthCell下面的class=zero的3个span元素 */
const fifthCellZero = document.querySelectorAll('.fifthCell .zero')


/* =-------------------------------------for循环---------------------------------------------------------------------- */

//一共有4个，使用for循环生成0~3的下标值
for (let i = 0; i < checkBox.length; i++) {

          /* 将生成的下标值0~3绑定到数组变量checkBox中。取出数组中的每一个元素。并为每一个元素绑定鼠标点击事件 */
          checkBox[i].onclick = function (e) {/* e参数用来获取事件的各种信息 */

                    /*如果  我们获取到事件触发的元素input获取到input元素的属性id等于select all则*/
                    if (e.target.getAttribute('id') == 'selectAll') {

                              /* 先使用for循环生成0~2的下标值 ，然后绑定生成的下标值然后取出三个input元素d*/
                              for (let z = 0; z < singleBox.length; z++) {

                                        /* 输出了下标值0 1 2  =console.log(z)*/
                                        /* 给class=single的所有input元素--设置checked的属性值为 --这个元素的checked ，点击的任意一个input元素后，checked的值会变成true选中状态*/
                                        singleBox[z].checked = this.checked;/* 而这里的this指的是id=selectAll的元素input复选框-----即，id=selectAll的元素input的值checked */

                                        /* 默认点击全选时，class=single的三个input是false未选中状态，
                                        而给这三个input设置this.check就相当于把全选框中的checked的值true选中状态 给绑定到 其他三个复选框中的input的checked属性值。 */
                              }
                    }
                    /* 当我们点击class= check的元素input复选框时，会调用函数amount()，并在控制台返回数值1-- console.log(1)*/
                    amountTo();
          }
}
/* ---------------------------------------------function函数-------------------------------------------------- */
//创建 合计 amountTo具名函数
function amountTo() {


          /* -----------------------初始值为0---------------------------------- */
          //数量总和total quantify初始值为0
          let fourthCellValue = 0;
          //合计amountTo的初始值为0
          let amountToValue = 0;
          
          let thirdCellZeroValue = 0;/* 拿third跟商品单价class=thIrdCell的td元素下面的span元素内部的值相加并绑定在一起。然后拿这个值与商品数量variation下面的span元素的内部数值相乘 */
          /* 最后将结果绑定到商品总计class=fifthCell 的td单元格里面的span元素的内部数值中。*/
          /* 将合计的值 */
          let fifthCellZeroValue = 0;

          /* --------------------------------for语句--------------------------------------------- */
          //使用for循环来生成0，1，2下标值,遍历的对象就是变量lineBox
          for (let a = 0; a < lineBox.length; a++) {
                    //先从变量lineBox取出每一行元素tr,然后从每行tr中获取到所有class=single行
                    let singleBox = lineBox[a].querySelector('.single');

                    /* 判断class=single的tr元素里面的td方框 是否被选中checked,如果是被选中，*/
                    if (singleBox.checked) {
                              //则允许获取tr元素里面的span标签
                              /* ---------------------------------------thirdCell---------------------------------------  */
                              //在每一行中去获取各自单元格thirdCell
                              let thirdCellBox = lineBox[a].querySelector('.thirdCell')
                              let thirdZeroBox = thirdCellBox.querySelector('.zero')

                              /* --------------------------------------fourthCellWidth------------------------------------ */
                              //从lineBox变量中获取class=variation的元素div
                              let fourthCellWidthBox = lineBox[a].querySelector('.fourthCellWidth');

                              //再从fourthCellWidthBox中获取class=variation的div元素
                              let variationBox = fourthCellWidthBox.querySelector('.variation');

                              /* //然后再从variationBox中取出span元素 */
                              let spanBox = variationBox.querySelector('span')

                              /* -------------------------------fifthCell----------------------------------------- */

                              /* 在每一行tr元素中获取到class=fifthCell的元素td */
                              let fifthCellBox = lineBox[a].querySelector('.fifthCell')

                              /* 然后在class=fifthCell的td元素中获取第一个span元素 */
                              let fifthCellSpan = fifthCellBox.querySelector('.zero')


                              /* ----------------------------fourthCellWidth里面的variation的span元素--------商品数量------------------------ */

                              /* 获取span元素的内部文本字符串 */
                              let textBox = spanBox.textContent;
                              /* 将span里面文本字符串转化为数值整型，并与变量totalQuantity数量的初始值绑定在一起，并相加。 */
                              fourthCellValue += parseInt(textBox);

                              /* ----------------------------------------------thirdCell里面的span元素--商品单价---------------------------------------- */
                              let thirdText = thirdZeroBox.textContent;
                              /* 将获取到的class=thirdCell下面的span元素里面的内部文本字符串转化为数值整型。然后跟自身的初始值thirdZeroValue相加拼接在一起。并将值更新到thirdCellZeroValue中 */
                              thirdCellZeroValue += parseFloat(thirdText)
                                     fifthCellSpan.textContent =  thirdCellZeroValue * fourthCellValue
                              /* -----------------------------------------------fifthCell里面的span元素-----商品总计------------------------------------ */

                              let fifthSpan = fifthCellSpan.textContent;
                              /*  ---用parseInt将字符串1转化为数值number整数类型,将fifthSpan里面的值与合计amountToValue的初始值0绑定在一起*/
                              amountToValue += parseFloat(fifthSpan);
                    }
          }
          /* 将商品数量variation的span元素里面的数值绑定到左边class=left的div元素下面的class=zero 的span元素--即已经选中--件商品*/
          zeroBox.textContent = fourthCellValue;
          /* 合计--使span里面的 0  修改为变量amountToValue的值0*/
          /* 将第五个单元格class= fifthCell 的td元素span里面的数值绑定到class=right的div元素下面的class=zeroAmountTO的内部文本中 */
          zeroAmountTo.textContent = amountToValue;
}







//-----------------------实现的是：当我鼠标单击class=minusSign的div元素时，class=variation的div元素里面的span元素的整数值会自减1，直到0为止。------------------------------------------------
//1、获取到所有的class=minusSign的div元素
const minusSignBox = document.querySelectorAll('.minusSign');//3个div元素减号



//获取到所有class=variation的div元素
const variationBox = document.querySelectorAll('.variation');/* 文本div-3个 */

//获取到所有variation下面的span文本值
const variationSpanBox = document.querySelectorAll('.variation span')/*  --文本div里面的span元素3个  */

/* 通过for循环生成0,1,2,下标值，，去取出minusSignBox中的3个元素div，---*/
for (let i = 0; i < minusSignBox.length; i++) {
          //将下标值0,1,2绑定到对象minusSignBox中,然后给取出的每个减号div元素绑定鼠标单击事件
          minusSignBox[i].onclick = function () {

                    /* 我们要先获取到当前这一行所在的变化值variation下面的span元素，以便后面绑定span里面的值 */
                    let variationSpan = this.parentNode.querySelector('.variation span')

                    /* 将获取到span元素里面的文本值textContent字符串转化为数字整数类型 */
                    let number = parseInt(variationSpan.textContent);

                    /* 如果这个number的数值等于0，则退出当前if语句。*/
                    if (number >= 2) {
                              /* 否则，判断为number的数值不等于0， */
                              /* 则number的数值会自减1 ，*/
                              number--;
                    }
                    /* 并将自减后的数值number转化为字符串 给绑定到class=variation的div元素里面的span文本内容中 */
                    /*  */
                    variationSpan.textContent = number.toString()
          }
}

//获取到所有的class=minusSign的div元素
const plusBox = document.querySelectorAll('.plus');/* 三个plus元素加号 */

/* 通过for循环生成0,1,2下标值--取出class=plus的3个div元素*/
for (let a = 0; a < plusBox.length; a++) {
          /* 将下标值0，1，2绑定到变量对象plusBox中，然后给每个class=plus的div元素绑定鼠标单击事件 */
          plusBox[a].onclick = function () {
                    /* 我们要先获取到当前这一行所在的变化值variation下面的span元素，以便后面绑定span里面的值*/
                    /* 这里是this指向的是class=plus的div元素 ----this.parentNode指向的是父级class=fourthCellWidth的td元素-
                    ---先从子级元素class=plus的div元素中退回到父级元素td中，再从父级元素td中去查找子级元素class= variation下面的span元素*/
                    let variationSpan = this.parentNode.querySelector('.variation span');
                    /* 先从变量variationSpan中取出3个span元素，然后获取到这三个span元素里面的内部文本 字符串*/
                    let number = parseInt(variationSpan.textContent)
                    /* 没有任何条件，只要用户点击加号，数值number的值就加1，没有上限 */
                    number++;
                    /* 将自增后的值number给转化为数字整数，然后绑定到class=variation的div元素下面的span元素里面的内部文本值 */
                    variationSpan.textContent = number.toString()
          }

}