


{
    /* 
        請完成一個可以連結 prototype 的函數 linkProto()

        var parent = linkProto(parentObj)
        var child = parent.linkProto(childObj)

        需要可以解除連結
        parent.unlink(child)

        注意 parent 的 unlink 是繼承來的，不是加上去的

        另外不使用 new 關鍵字，並且有簡易的參數類型檢查

    */
    const linkProto = (parentObj) => {
        if (Object.prototype.toString.call(parentObj) === '[object Object]') {

            parentObj.__proto__ = {
                unlink(chobj) {
                    chobj.__proto__ = Object.prototype
                    console.log('unlink success')
                }
            }

            return (childObj) => {

                if (Object.prototype.toString.call(childObj) === '[object Object]') {
                    childObj.__proto__ = parentObj
                    console.log('link success')
                    return childObj
                }
                else { console.error('child type error') }
            }
        }
        else { console.error('parent type error') }
    }


    var objParent = {
        say: 'hi',
        name: 'Bob',
        do() {
            console.log(this.name + ' say ' + this.say)
        }
    }

    var p = linkProto(objParent)

    var child = p({
        name: 'Tina'
    }) // link success

    child.do() // Tina say hi

    objParent.unlink(child) // unlink success

    child.do()  // Uncaught TypeError: child.do is not a function

    var array = []
    var number = 1
    var func = () => { }

    linkProto(array) // parent type error
    linkProto(number) // parent type error
    linkProto(func) // parent type error
}

