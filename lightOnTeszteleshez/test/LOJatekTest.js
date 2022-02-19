const {test} = QUnit;


QUnit.module("ellenorzes()", (hook)=>{
    hook.beforeEach(()=>{
        this.loJatek = new LOJatek(0);
    });

    test("ellenőrzés létezik-e?", (assert)=>
    {
        assert.ok(this.loJatek.ellenorzes, "ellenőrzés létezik");
    });

    test("ellenőrzés függvény-e?", (assert)=>{
        assert.ok(typeof this.loJatek.ellenorzes==="function", "ellenőrzés fgvény");
    });

    test("minden lámpa felkapcsolva", (assert)=>{
        let loJatek = new LOJatek(lampak.length);
        assert.equal(loJatek.ellenorzes(),lampak.length);
    });

    test("minden lámpa lekapcsolva", (assert)=>{
        assert.equal(this.loJatek.ellenorzes(),0);
    });

    test("néhány elem felkapcsolva(5)", (assert)=>{
        let loJatek = new LOJatek(5);
        assert.equal(loJatek.ellenorzes(),5);
    });

})

QUnit.module("szomszedokValtoztatasa", (h)=>{
    h.beforeEach(()=>{
        this.loJatek = new LOJatek(0);
    });
    

    test("szomszedokValtoztatasa létezik-e?", (assert)=>
    {
        assert.ok(this.loJatek.szomszedokValtoztatasa, "szomszedokValtoztatasa létezik");
    });

    test("szomszedokValtoztatasa függvény-e?", (assert)=>{
        assert.ok(typeof this.loJatek.szomszedokValtoztatasa==="function", "szomszedokValtoztatasa fgvny");
    });

    test("középső lámpa kapcsolása", (assert)=>{
        loJatek.szomszedokValtoztatasa(4);
        assert.equal(lampak[3].allapot,true);
        assert.equal(lampak[1].allapot,true);
        assert.equal(lampak[5].allapot,true);
        assert.equal(lampak[7].allapot,true);

        assert.equal(this.loJatek.ellenorzes(),4);
    });

    test("bal felső lámpa kapcsolása", (assert)=>{
        loJatek.szomszedokValtoztatasa(0);
        assert.equal(lampak[1].allapot, true);
        assert.equal(lampak[3].allapot, true);
        
        assert.equal(this.loJatek.ellenorzes(),2);
    });

    test("jobb felső lámpa kapcsolása", (assert)=>{
        loJatek.szomszedokValtoztatasa(2);
        assert.equal(lampak[1].allapot, true);
        assert.equal(lampak[5].allapot, true);
        
        assert.equal(this.loJatek.ellenorzes(),2);
    });

    test("bal alsó lámpa kapcsolása", (assert)=>{
        loJatek.szomszedokValtoztatasa(6);
        assert.equal(lampak[3].allapot, true);
        assert.equal(lampak[7].allapot, true);
        
        assert.equal(this.loJatek.ellenorzes(),2);
    });

    test("jobb alsó lámpa kapcsolása", (assert)=>{
        loJatek.szomszedokValtoztatasa(8);
        assert.equal(lampak[5].allapot, true);
        assert.equal(lampak[7].allapot, true);
        
        assert.equal(this.loJatek.ellenorzes(),2);
    });

    test("bal alsó lámpa kapcsolása", (assert)=>{
        loJatek.szomszedokValtoztatasa(6);
        assert.equal(lampak[3].allapot, true);
        assert.equal(lampak[7].allapot, true);
        
        assert.equal(this.loJatek.ellenorzes(),2);
    });

    test("jobb szélső középső lámpa kapcsolása", (assert)=>{
        loJatek.szomszedokValtoztatasa(5);
        assert.equal(lampak[2].allapot, true);
        assert.equal(lampak[4].allapot, true);
        assert.equal(lampak[8].allapot, true);

        assert.equal(this.loJatek.ellenorzes(),3);
    });

    test("bal szélső középső lámpa kapcsolása", (assert)=>{
        loJatek.szomszedokValtoztatasa(3);
        assert.equal(lampak[0].allapot, true);
        assert.equal(lampak[4].allapot, true);
        assert.equal(lampak[6].allapot, true);

        assert.equal(this.loJatek.ellenorzes(),3);
    });


    test("első sor középső lámpa kapcsolása", (assert)=>{
        loJatek.szomszedokValtoztatasa(1);
        assert.equal(lampak[0].allapot, true);
        assert.equal(lampak[2].allapot, true);
        assert.equal(lampak[4].allapot, true);

        assert.equal(this.loJatek.ellenorzes(),3);
    });

    test("utolsó sor középső lámpa kapcsolása", (assert)=>{
        loJatek.szomszedokValtoztatasa(7);
        assert.equal(lampak[4].allapot, true);
        assert.equal(lampak[6].allapot, true);
        assert.equal(lampak[8].allapot, true);

        assert.equal(this.loJatek.ellenorzes(),3);
    });

})