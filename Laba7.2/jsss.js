( () => {
    "use strict";
    const i = "drag__draggable"
      , l = "gallery__row"
      , t = "gallery__draggable"
      , s = "gallery__arrow--left"
      , e = "gallery__arrow--right"
      , n = "gallery__arrow--disabled"
      , a = "gallery__dots"
      , h = "gallery__dot"
      , o = "gallery__dot--active"
      , j = "gallery__tabs"
      , c = "gallery__tab"
      , r = "gallery__tab--active";
    class d {
        constructor(i, l={}) {
            this.i = i,
            this.j = i.childElementCount,
            this.ii = !1,
            this.ij = !1,
            this.jj = !1,
            this.ji = !1,
            this.iii = !1,
            this.iij = 0,
            this.iji = {
                ijjiij: l.ijjiij || !1,
                ijjiji: l.ijjiji || !1,
                ijjijj: l.ijjijj || !1,
                ijj: l.ijj || !1,
                tabs: l.tabs || !1,
                jii: l.jii || !1,
                jij: l.jij || 1,
                jji: l.jji || 5,
                jjj: l.jjj || .25,
                iiii: l.iiii || 20,
                ijijjj: l.ijijjj || !1,
                iiij: 1e3 * l.iiij || 2e3,
                iiji: l.iiji || !1,
                iijj: l.iijj || !1,
                ijii: l.ijii || null
            },
            this.liiillilliiiiliillli = this.liiillilliiiiliillli.bind(this),
            this.liiiililliliiiiiilil = this.liiiililliliiiiiilil.bind(this),
            this.llilliililllililliil = this.llilliililllililliil.bind(this),
            this.ililliiillilililllll = this.ililliiillilililllll.bind(this),
            this.lllilllliiiilillilii = this.lllilllliiiilillilii.bind(this),
            this.llllillliilillllliil = this.llllillliilillllliil.bind(this),
            this.llilililililliiilill = this.llilililililliiilill.bind(this),
            this.lliiilliiiillllliili = this.lliiilliiiillllliili.bind(this),
            this.lllliililiiiiiililil = this.lllliililiiiiiililil.bind(this),
            this.illiiiiliiiiliiillll = this.illiiiiliiiiliiillll.bind(this),
            this.iliilllliililllillii = this.iliilllliililllillii.bind(this),
            this.iiillllililiilliiili = this.iiillllililiilliiili.bind(this),
            this.liilliililliiilillll = this.liilliililliiilillll.bind(this),
            this.ililliiiliililliilli = this.ililliiiliililliilli.bind(this),
            this.llllililliiilllilili = this.llllililliiilllilili.bind(this),
            this.llllililiillliilllll = this.llllililiillliilllll.bind(this),
            this.iiilllllillilliiilll = this.iiilllllillilliiilll.bind(this),
            this.liilliiililllliillll = this.liilliiililllliillll.bind(this),
            this.iiilillilllliiiillll = this.iiilillilllliiiillll.bind(this),
            this.lliillllliiliiliilil = this.lliillllliiliiliilil.bind(this),
            this.lllillliiliiililliii = this.lllillliiliiililliii.bind(this),
            this.ililiiiiiiliiiliiiil = this.ililiiiiiiliiiliiiil.bind(this),
            this.llilllliililliliilli = this.llilllliililliliilli.bind(this),
            this.iiillllilliliiilllii = this.iiillllilliliiilllii.bind(this),
            this.liiillilliiiiliillli(),
            this.liiiililliliiiiiilil(),
            this.llilliililllililliil(),
            this.iji.ijijjj && this.lliillllliiliiliilil(this.iji.iiij)
        }
        liiillilliiiiliillli() {
            if (this.i.classList.add("gallery"),
            this.i.innerHTML = `\n\t\t<div class="gallery__rowbox">\n\t\t\t<div class="${l}">\n\t\t\t\t${this.i.innerHTML}\n\t\t\t</div>\n\t\t</div>\n\t\t`,
            this.ijij = this.i.querySelector(`.${l}`),
            this.ijji = Array.from(this.ijij.children).map((i => function({element: i, className: l}) {
                const t = document.createElement("div");
                return t.classList.add(l),
                i.parentElement.append(t),
                t.append(i),
                t
            }({
                element: i,
                className: "gallery__slidebox"
            }))),
            this.iji.ijjijj) {
                const i = document.createElement("div");
                i.classList.add("gallery__arrows"),
                i.innerHTML = `\n\t\t\t<div class="gallery__leftside">\n\t\t\t\t<div class="${s}">\n\t\t\t\t<svg class="gallery__arr-left" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t<path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM26 7L1 7V9L26 9V7Z"/>\n\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="gallery__rightside">\n\t\t\t\t<div class="${e}">\n\t\t\t\t<svg class="gallery__arr-right" width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t<path d="M25.7071 8.7071C26.0976 8.31658 26.0976 7.68341 25.7071 7.29289L19.3431 0.92893C18.9526 0.538405 18.3195 0.538406 17.9289 0.92893C17.5384 1.31945 17.5384 1.95262 17.9289 2.34314L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.7071ZM1.22392e-07 9L25 9L25 7L-1.22392e-07 7L1.22392e-07 9Z"/>\n\t\t\t\t</svg>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t`,
                this.i.append(i),
                this.ijjj = this.i.querySelector(`.${s}`),
                this.jjjj = this.i.querySelector(`.${e}`)
            }
            if (this.iiiii = this.iji.jij - 1,
            this.iiiij = [...Array(this.j).keys()],
            this.iji.ijj) {
                const i = document.createElement("div");
                i.classList.add(a),
                this.i.append(i),
                this.iiiji = this.i.querySelector(`.${a}`),
                this.iiiji.innerHTML = this.iiiij.map((i => `<div class="${h} ${i === this.iiiii ? o : ""}">\n\t\t\t\t</div>`)).join(""),
                this.iiijj = Array.from(this.iiiji.querySelectorAll(`.${h}`))
            }
            if (this.iji.tabs) {
                const i = document.createElement("div");
                i.classList.add(j),
                this.i.append(i),
                this.iijii = this.i.querySelector(`.${j}`),
                this.iijii.innerHTML = this.iiiij.map((i => `<div class="${c} ${i === this.iiiii ? r : ""}">\n\t\t\t\t\t\t<div class="gallery__tabtext"></div>\n\t\t\t\t\t</div>`)).join(""),
                this.iijij = Array.from(this.iijii.querySelectorAll(`.${c}`)),
                this.iijji = this.iijij.map((i => i.firstElementChild));
                for (let i = 0; i < this.iijij.length; i++)
                    void 0 !== this.iji.jii[i] && (this.iijji[i].innerHTML = this.iji.jii[i])
            }
        }
        liiiililliliiiiiilil() {
            const i = Array.from(this.ijji);
            this.ijiii = this.i.getBoundingClientRect().width,
            this.ijiij = this.iiiij.length - 1,
            this.ijiji = [],
            i.forEach((i => {
                this.ijiji.push(i.getBoundingClientRect().width)
            }
            )),
            this.ijijj = [0];
            for (let i = 0; i < this.iiiij.length; i++) {
                let l = this.ijiji.reduce(( (l, t, s) => s <= i ? l + t : l), 0);
                this.ijijj.push(-l)
            }
            this.ijjii = -this.ijijj.at(-1),
            this.ijijj.pop(),
            this.ijijji = this.ijijj[this.iiiii],
            this.iji.ijjiij || (this.ijjij = this.ijijj.at(-1),
            this.ijiii < this.ijiji.at(-1) && (this.ijjij += -this.ijiji.at(-1) + this.ijiii),
            this.ijjji = !(this.ijjii - this.ijiii <= 0)),
            this.iji.ijjiij && (this.ijjjj = this.ijijj.findIndex((i => i + this.ijjii - this.ijiii <= 0)),
            -1 === this.ijjjj && (this.ijjjj = 0),
            this.jjjjj = this.ijijj[this.ijjjj],
            this.ijiii < this.ijiji.at(-1) && (this.jjjjj += -this.ijiji.at(-1) + this.ijiii),
            this.ijjji = 0 !== this.ijjjj),
            this.iiillllililiilliiili(),
            this.ijij.style.width = this.ijjii + "px",
            this.illiiiiliiiiliiillll(),
            this.iiiiii = !1,
            this.iji.ijjijj && this.liilliililliiilillll(),
            this.iji.ijj && this.ililliiiliililliilli(),
            this.iji.tabs && this.llllililliiilllilili(),
            this.iji.ijjiji || (this.i.style.touchAction = "auto")
        }
        lllilllliiiilillilii() {
            this.liiiililliliiiiiilil()
        }
        llllillliilillllliil(i) {
            if (this.iji.ijijjj && this.lllillliiliiililliii(),
            !this.ijjji)
                return this.iiiii = 0,
                this.i.classList.remove(t),
                this.lliiilliiiillllliili(),
                void (this.iiiiii = !1);
            this.iiiiii = !0,
            this.iiiiij = 0,
            this.ii = !1,
            this.iiiiji = i.pageX,
            this.iiiijj = i.pageY,
            this.iiijii = this.ijijji,
            this.iiillllililiilliiili(),
            this.i.classList.add(t),
            this.iiijij = this.iiiii,
            window.addEventListener("pointermove", this.lllliililiiiiiililil)
        }
        lllliililiiiiiililil(i) {
            this.iiijji = i.pageX,
            this.iiijjj = i.pageY,
            this.iijiii = this.iiiiji - this.iiijji,
            this.iijiij = this.iiiijj - this.iiijjj,
            m(this.llilllliililliliilli(), 20),
            this.iiiiij = this.iiijji - this.iiiiji;
            const l = this.iiiiij / this.iji.jji;
            this.iji.ijjiij || (this.ijijji = Math.max(Math.min(this.iiijii + this.iiiiij, l), this.ijjij + l)),
            this.iji.ijjiij && (this.ijijji = Math.max(Math.min(this.iiijii + this.iiiiij, l), this.jjjjj + l)),
            this.iijijj = this.ijijji > this.ijijj[this.iiijij - 1] + this.ijiji[this.iiijij - 2] / 2,
            this.iijjii = this.ijijji < this.ijijj[this.iiijij + 1] - this.ijiji[this.iiijij + 1] / 2,
            this.illiiiiliiiiliiillll()
        }
        llilllliililliliilli() {
            this.i.style.touchAction = Math.abs(this.iijiii) > Math.abs(this.iijiij) ? "none" : "auto"
        }
        iiillllilliliiilllii() {
            this.jj = !0;
            let i = 0
              , l = 0;
            function t(t, s, e) {
                let n = Math.abs(t - e);
                i || l || (i = s,
                l = n),
                n < l && (i = s,
                l = n)
            }
            if (this.iji.ijjiij || this.ijijj.forEach(( (i, l) => t(i, l, this.ijijji))),
            this.iji.ijjiij) {
                let i = [...this.ijijj];
                i.length = this.ijjjj + 1,
                i.forEach(( (i, l) => t(i, l, this.ijijji)))
            }
            this.ii = !0,
            this.iiiii = i
        }
        llilililililliiilill() {
            this.iiiiii && (window.removeEventListener("pointermove", this.lllliililiiiiiililil),
            (0 !== this.iiijij && 1 !== this.iiijij || !this.iijjii) && (this.iiijij !== this.iiiij.at(-1) && this.iiijij !== this.iiiij.at(-2) || !this.iijijj) && (0 === this.iiijij && 1 === this.iiijij && this.iiijij === this.iiiij.at(-1) && this.iiijij === this.iiiij.at(-2) || !this.iijjii && !this.iijijj) || this.iiillllilliliiilllii(),
            this.jj || (this.iiiiij > this.iji.iiii && this.iiiii > 0 && !this.ii && (this.ii = !0,
            this.iiiii -= 1),
            this.iji.ijjiij || this.iiiiij < -this.iji.iiii && this.iiiii < this.ijiij && !this.ii && (this.ii = !0,
            this.iiiii += 1),
            this.iji.ijjiij && this.iiiiij < -this.iji.iiii && this.iiiii < this.ijjjj && !this.ii && (this.ii = !0,
            this.iiiii += 1)),
            this.jj = !1,
            this.i.classList.remove(t),
            this.lliiilliiiillllliili()),
            this.iiiiii = !1
        }
        lliillllliiliiliilil(i, l=1) {
            if (!this.ij) {
                this.ji = !1;
                let l, t = this.iiiii, s = this.iji.ijjiij ? this.ijjjj : this.iiiij.length - 1;
                this.ijiiij = setInterval(( () => {
                    if (this.ij && clearInterval(this.ijiiij),
                    t >= s)
                        return this.iji.iiji && (l = Math.abs(this.iiiii)),
                        this.iiiii = -1,
                        t = -1,
                        ++t,
                        this.ii = !0,
                        this.iiiii += 1,
                        this.lliiilliiiillllliili(l),
                        clearInterval(this.ijiiij),
                        void setTimeout(( () => {
                            this.lliillllliiliiliilil(i)
                        }
                        ), this.iji.jjj * l * 1e3);
                    !this.ij && t < s && (++t,
                    this.ii = !0,
                    this.iiiii += 1,
                    this.lliiilliiiillllliili(l))
                }
                ), i)
            }
        }
        lllillliiliiililliii() {
            this.ij = !0,
            this.iji.iijj && this.ililiiiiiiliiiliiiil(),
            clearInterval(this.ijiiij),
            this.iji.iijj && this.iji.ijii && !this.iii && (this.iijjTimer = setTimeout(( () => {
                this.ij = !1,
                this.iji.ijijjj && (this.lliillllliiliiliilil(this.iji.iiij),
                this.ji || (this.iij >= this.iji.ijii.length - 1 && (this.iii = !0,
                this.ililiiiiiiliiiliiiil()),
                ++this.iij,
                this.ji = !0))
            }
            ), 1e3 * this.iji.ijii[this.iij]))
        }
        ililiiiiiiliiiliiiil() {
            clearTimeout(this.iijjTimer)
        }
        illiiiiliiiiliiillll() {
            this.ijij.style.transform = `translate3d(${this.ijijji}px, 0, 0)`
        }
        iliilllliililllillii(i=1) {
            this.ijij.style.transition = `all ${this.iji.jjj * i}s ease 0s`
        }
        iiillllililiilliiili() {
            this.ijij.style.transition = "all 0s ease 0s"
        }
        liilliiililllliillll(i) {
            const l = i.target.closest(".gallery__dot");
            if (!l)
                return;
            let t;
            this.iji.ijijjj && this.lllillliiliiililliii();
            for (let i = 0; i < this.iiijj.length; i++)
                if (this.iiijj[i] === l) {
                    t = i;
                    break
                }
            if (t === this.iiiii)
                return;
            const s = Math.abs(this.iiiii - t);
            this.iiiii = t,
            this.lliiilliiiillllliili(s)
        }
        iiilillilllliiiillll(i) {
            const l = i.target.closest(".gallery__tab");
            if (!l)
                return;
            let t;
            this.iji.ijijjj && this.lllillliiliiililliii();
            for (let i = 0; i < this.iijij.length; i++)
                if (this.iijij[i] === l) {
                    t = i;
                    break
                }
            if (t === this.iiiii)
                return;
            const s = Math.abs(this.iiiii - t);
            this.iiiii = t,
            this.lliiilliiiillllliili(s)
        }
        llllililiillliilllll() {
            this.iji.ijijjj && this.lllillliiliiililliii(),
            this.iiiii <= 0 || (this.iiiii -= 1,
            this.lliiilliiiillllliili())
        }
        iiilllllillilliiilll() {
            this.iji.ijijjj && this.lllillliiliiililliii(),
            !this.iji.ijjiij && this.iiiii >= this.ijiij || this.iji.ijjiij && this.iiiii >= this.ijjjj || (this.iiiii += 1,
            this.lliiilliiiillllliili())
        }
        lliiilliiiillllliili(i) {
            this.ijijji = this.ijijj[this.iiiii],
            this.illiiiiliiiiliiillll(),
            this.iliilllliililllillii(i),
            this.iji.ijjijj && this.liilliililliiilillll(),
            this.iji.ijj && this.ililliiiliililliilli(),
            this.iji.tabs && this.llllililliiilllilili()
        }
        liilliililliiilillll() {
            this.iji.ijjijj && (this.iiiii <= 0 ? this.ijjj.classList.add(n) : this.ijjj.classList.remove(n),
            this.iji.ijjiij || (this.iiiii >= this.ijiij || !this.ijjji ? this.jjjj.classList.add(n) : this.jjjj.classList.remove(n)),
            this.iji.ijjiij && (this.iiiii >= this.ijjjj ? this.jjjj.classList.add(n) : this.jjjj.classList.remove(n)))
        }
        ililliiiliililliilli() {
            if (this.iji.ijj) {
                for (let i = 0; i < this.iiijj.length; i++)
                    this.iiijj[i].classList.remove(o);
                this.iiijj[this.iiiii].classList.add(o)
            }
        }
        llllililliiilllilili() {
            if (this.iji.tabs) {
                for (let i = 0; i < this.iijij.length; i++)
                    this.iijij[i].classList.remove(r);
                this.iijij[this.iiiii].classList.add(r)
            }
        }
        llilliililllililliil() {
            this.illlliliiilliilillii = m(this.lllilllliiiilillilii),
            window.addEventListener("resize", this.illlliliiilliilillii),
            this.iji.ijjiji && (this.ijij.addEventListener("pointerdown", this.llllillliilillllliil),
            window.addEventListener("pointerup", this.llilililililliiilill),
            window.addEventListener("pointercancel", this.llilililililliiilill)),
            this.iji.ijjijj && (this.ijjj.addEventListener("pointerup", this.llllililiillliilllll),
            this.jjjj.addEventListener("pointerup", this.iiilllllillilliiilll)),
            this.iji.ijj && this.iiiji.addEventListener("pointerup", this.liilliiililllliillll),
            this.iji.tabs && this.iijii.addEventListener("pointerup", this.iiilillilllliiiillll)
        }
        ililliiillilililllll() {
            window.removeEventListener("resize", this.illlliliiilliilillii),
            this.ijij.removeEventListener("pointerdown", this.llllillliilillllliil),
            window.removeEventListener("pointerup", this.llilililililliiilill),
            window.removeEventListener("pointercancel", this.llilililililliiilill),
            this.ijjj.removeEventListener("pointerup", this.llllililiillliilllll),
            this.jjjj.removeEventListener("pointerup", this.iiilllllillilliiilll),
            this.iiiji.removeEventListener("pointerup", this.liilliiililllliillll),
            this.iijii.removeEventListener("pointerup", this.iiilillilllliiiillll)
        }
    }
    function m(i, l=100) {
        let t;
        return function(s) {
            clearTimeout(t),
            t = setTimeout(i, l, s)
        }
    }
    const _ = document.querySelector(".header");
    let p = _.offsetHeight
      , g = document.documentElement.clientHeight
      , v = !1;
    const u = i => {
        const l = Object.assign({
            contentSelector: "",
            headerText: "",
            modalId: "",
            btnToShowSelector: "",
            btnToShowSelector2: ""
        }, i)
          , t = document.body;
        const s = function(i) {
            const l = i.querySelector(".modal__close a")
              , s = i.querySelector(".buttonbar__ok")
              , e = l => {
                l && l.preventDefault(),
                i.classList.remove("_visible"),
                t.classList.remove("modal__visible")
            }
            ;
            return l.addEventListener("click", (i => {
                e(i)
            }
            )),
            s.addEventListener("click", (i => {
                e(i)
            }
            )),
            t.addEventListener("keyup", (i => {
                "Escape" === i.code && e(i)
            }
            )),
            {
                show: l => {
                    l && l.preventDefault(),
                    i.classList.add("_visible"),
                    t.classList.add("modal__visible")
                }
                ,
                hide: e
            }
        }(function() {
            const i = function() {
                const i = document.querySelector(l.contentSelector);
                return (i => {
                    const l = document.createElement("template");
                    return i = i.trim(),
                    l.innerHTML = i,
                    l.content.firstChild
                }
                )('\n        <div class="modal" id=\'{{modalId}}\'>\n            <div class="modal__container">\n                <div class="modal__body">\n                    <div class="modal__header">{{modalHeader}}</div>\n                    <div class="modal__close">\n                        <a href="#">\n\t\t\t\t\t\t<img src="./img/close.svg" alt="close" />\n                        </a>\n                    </div>\n                    <div class="modal__content">\n                        {{modalContent}}\n\n                        <div class="modal__buttonbar">\n                            <button class=\'buttonbar__ok\'>Ok</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        '.replace("{{modalId}}", l.modalId).replace("{{modalHeader}}", l.headerText).replace("{{modalContent}}", i.innerHTML))
            }();
            return document.querySelector(l.contentSelector).remove(),
            t.append(i),
            i
        }());
        return function(i) {
            const t = document.querySelector(l.btnToShowSelector)
              , s = document.querySelector(l.btnToShowSelector2);
            t.addEventListener("click", (l => {
                l.preventDefault(),
                i()
            }
            )),
            s.addEventListener("click", (l => {
                l.preventDefault(),
                i()
            }
            ))
        }(s.show),
        s
    }
    ;
    !function(i) {
        let l = new Image;
        l.onload = l.onerror = function() {
            !function(i) {
                let l = !0 === i ? "webp" : "no-webp";
                document.documentElement.classList.add(l)
            }(2 == l.height)
        }
        ,
        l.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }(),
    function() {
        const i = {
            Android: () => navigator.userAgent.match(/Android/i),
            BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
            iOs: () => navigator.userAgent.match(/iPhone/i),
            Opera: () => navigator.userAgent.match(/Opera Mini/i),
            Windows: () => navigator.userAgent.match(/IEMobile/i),
            any: () => i.Android() || i.BlackBerry() || i.iOs() || i.Opera() || i.Windows()
        };
        i.any() ? document.body.classList.add("_mobile") : navigator.userAgent.match(/iPad|iPod/i) ? document.body.classList.add("_tablet") : document.body.classList.add("_pc")
    }(),
    function(i) {
        const l = document.querySelector(".menu__icon")
          , t = document.querySelector(".menu__area")
          , s = document.querySelector(".menu__body");
        l && l.addEventListener("click", (function(l) {
            let e;
            document.body.classList.toggle("_lock"),
            t.classList.toggle("_active"),
            s.classList.toggle("_active"),
            s.classList.contains("_active") ? clearTimeout(e) : e = setTimeout(( () => {
                !s.classList.contains("_active") && s.querySelector(".drag__box") ? i.lilliilliiliilillill() : clearTimeout(e)
            }
            ), 1e3)
        }
        )),
        window.addEventListener("resize", (function(i) {
            window.innerWidth >= 1025 ? (document.body.classList.remove("_lock"),
            t.classList.remove("_active"),
            s.classList.remove("_active"),
            g = document.documentElement.clientHeight,
            v = !0,
            p = 120) : p = 98
        }
        ))
    }(new class {
        constructor(i, l={}) {
            this.illlillilllilliiliii = i,
            this.llllllliliiiliilliil = {
                iiiiiiilillllllliiii: l.iiiiiiilillllllliiii || .25,
                iilililiililiilillli: l.iilililiililiilillli || 10,
                ililiilliliiililiill: l.ililiilliliiililiill || .08
            },
            this.ililiiiiliilliiiliii = this.ililiiiiliilliiiliii.bind(this),
            this.liilllliiiiliiliilli = this.liilllliiiiliiliilli.bind(this),
            this.llllliiiiilliiiiiili = this.llllliiiiilliiiiiili.bind(this),
            this.illiillllililliiilii = this.illiillllililliiilii.bind(this),
            this.iilillllliiiiliiilii = this.iilillllliiiiliiilii.bind(this),
            this.lilliilliiliilillill = this.lilliilliiliilillill.bind(this),
            this.llilililllllliliilll = this.llilililllllliliilll.bind(this),
            this.illililiillilliilill = this.illililiillilliilill.bind(this),
            this.ililililillliillliil = this.ililililillliillliil.bind(this),
            this.ililillilliiililiiil = this.ililillilliiililiiil.bind(this),
            this.liililiillliilllilll = this.liililiillliilllilll.bind(this),
            this.ililiiiiliilliiiliii(),
            this.liilllliiiiliiliilli(),
            this.ililillilliiililiiil()
        }
        ililiiiiliilliiiliii() {
            this.illlillilllilliiliii.classList.add("drag"),
            this.illlillilllilliiliii.innerHTML = `\n\t\t<div class="drag__rowbox">\n\t\t\t<div class="drag__row">\n\t\t\t\t<div class="drag__box">\n\t\t\t\t\t${this.illlillilllilliiliii.innerHTML}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t`
        }
        liilllliiiiliiliilli() {
            this.illlllililiillililli = this.illlillilllilliiliii.querySelector(".drag__box"),
            this.ililliiliiiiiiiillli = this.illlllililiillililli.children[0].getBoundingClientRect().height,
            this.ililililillliillliil(),
            this.llilililllllliliilll(),
            this.iiiilliilllllliillil = this.illlillilllilliiliii.children[0].getBoundingClientRect().height,
            this.lllliiililiillliliii = this.ililliiliiiiiiiillli - this.iiiilliilllllliillil,
            this.lllliiillllillllilii = !(this.lllliiililiillliliii <= 0),
            this.iillililiiililililll = this.iillililiiililililll ?? 0,
            this.llilililllllliliilll()
        }
        llllliiiiilliiiiiili(l) {
            this.lllliiillllillllilii && (this.iiiiiiiilililillliil = l.pageY,
            this.iiliiililliilllillil = this.iillililiiililililll,
            this.ililililillliillliil(),
            this.illlillilllilliiliii.classList.add(i),
            window.addEventListener("pointermove", this.illiillllililliiilii))
        }
        illiillllililliiilii(i) {
            if (this.lllliiillllillllilii) {
                this.ililllililiiiliiliil = i.pageY,
                this.iiilliiiiilliillliii = this.ililllililiiiliiliil - this.iiiiiiiilililillliil;
                const l = this.iiilliiiiilliillliii / this.llllllliliiiliilliil.iilililiililiilillli;
                this.iillililiiililililll = Math.max(Math.min(this.iiliiililliilllillil + this.iiilliiiiilliillliii, l), -this.lllliiililiillliliii + l),
                this.iillililiiililililll >= this.iiiilliilllllliillil * this.llllllliliiiliilliil.ililiilliliiililiill && (this.iillililiiililililll = this.iiiilliilllllliillil * this.llllllliliiiliilliil.ililiilliliiililiill),
                this.iillililiiililililll <= -this.lllliiililiillliliii - this.iiiilliilllllliillil * this.llllllliliiiliilliil.ililiilliliiililiill && (this.iillililiiililililll = -this.lllliiililiillliliii - this.iiiilliilllllliillil * this.llllllliliiiliilliil.ililiilliliiililiill),
                this.llilililllllliliilll()
            }
        }
        iilillllliiiiliiilii() {
            this.lllliiillllillllilii && (window.removeEventListener("pointermove", this.illiillllililliiilii),
            this.illlillilllilliiliii.classList.remove(i),
            this.iillililiiililililll >= 0 && (this.iillililiiililililll = 0),
            this.iillililiiililililll <= -this.lllliiililiillliliii && (this.iillililiiililililll = -this.lllliiililiillliliii),
            this.llilililllllliliilll(),
            this.illililiillilliilill())
        }
        lilliilliiliilillill() {
            this.iillililiiililililll = 0,
            this.liilllliiiiliiliilli()
        }
        llilililllllliliilll() {
            this.illlllililiillililli.style.transform = `translate3d(0, ${this.iillililiiililililll}px, 0)`
        }
        illililiillilliilill() {
            this.illlllililiillililli.style.transition = `all ${this.llllllliliiiliilliil.iiiiiiilillllllliiii}s ease 0s`
        }
        ililililillliillliil() {
            this.illlllililiillililli.style.transition = "all 0s ease 0s"
        }
        ililillilliiililiiil() {
            this.iiiiiillllililllilli = function(i, l=100) {
                let t;
                return function(s) {
                    clearTimeout(t),
                    t = setTimeout(i, l, s)
                }
            }(this.lilliilliiliilillill),
            window.addEventListener("resize", this.iiiiiillllililllilli),
            this.illlllililiillililli.addEventListener("pointerdown", this.llllliiiiilliiiiiili),
            window.addEventListener("pointerup", this.iilillllliiiiliiilii),
            window.addEventListener("pointercancel", this.iilillllliiiiliiilii)
        }
        liililiillliilllilll() {
            window.removeEventListener("resize", this.iiiiiillllililllilli),
            this.slidebox.removeEventListener("pointerdown", this.llllliiiiilliiiiiili),
            window.removeEventListener("pointerup", this.iilillllliiiiliiilii),
            window.removeEventListener("pointercancel", this.iilillllliiiiliiilii)
        }
    }
    (document.getElementById("menu__body"),{
        iiiiiiilillllllliiii: .25,
        iilililiililiilillli: 4,
        ililiilliliiililiill: .22
    })),
    function(i=.3, l=.05) {
        let t = 0
          , s = g * i;
        const e = () => window.pageYOffset || document.documentElement.scrollTop
          , n = () => _.classList.contains("hide");
        let a;
        window.addEventListener("scroll", ( () => {
            document.body.classList.contains("_pc") && (v && (s = g * i,
            v = !1),
            e() > t && e() > p ? (n() || _.classList.add("hide"),
            a = 0) : e() < t && n() && (a || (a = e()),
            (e() < a - s || e() < p) && (_.classList.remove("hide"),
            a = 0)),
            e() > g ? (_.classList.remove("null-transition"),
            _.classList.add("fixed")) : e() < p * l && (_.classList.add("null-transition"),
            _.classList.remove("fixed")),
            t = e())
        }
        ))
    }(.8),
    document.getElementById("slider-team") && new d(document.getElementById("slider-team"),{
        ijjiij: !0,
        ijjiji: !0,
        ijjijj: !0
    }),
    document.getElementById("slider-projects") && new d(document.getElementById("slider-projects"),{
        ijjiij: !0,
        ijjiji: !0,
        ijjijj: !0
    });
    const w = document.getElementById("load-btn");
    if (w) {
        const f = '<div class="catalog__card catalog__card--1">\n\t<div class="catalog__row">\n\t\t<div class="catalog__column catalog__column--1">\n\t\t\t<div class="catalog__textblock _anim-items _anim-no-hide">\n\t\t\t\t<div class="catalog__heading _anim-items _anim-no-hide">\n\t\t\t\t\t<h3>Design<br />Masters</h3>\n\t\t\t\t</div>\n\t\t\t\t<p class="catalog__paragraph _anim-show _anim-show _anim-show">Станьте дизайнером интерьеров!</p>\n\t\t\t\t<p class="catalog__paragraph _anim-show _anim-show _anim-show">\n\t\t\t\t\tПроходите уровни матч-3, создавайте собственные дизайны и&nbsp;интерьеры, следите за&nbsp;историей и&nbsp;знакомьтесь с&nbsp;персонажами.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class="catalog__link link-catalog" id="popap-one-link--1">\n\t\t\t\t<div class="link-catalog__row">\n\t\t\t\t\t<span>Подробнее</span>\n\t\t\t\t\t<div class="link-catalog__icon">\n\t\t\t\t\t\t<img src="./img/arrow_catalog.svg" alt="arrow" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="catalog__column catalog__column--2">\n\t\t\t<div class="catalog__picture">\n\t\t\t\t<img src="./img/design_masters.jpg" alt="design masters" />\n\t\t\t</div>\n\t\t\t<div class="catalog__link link-catalog" id="popap-one-link--2">\n\t\t\t\t<div class="link-catalog__row">\n\t\t\t\t\t<span>Подробнее</span>\n\t\t\t\t\t<div class="link-catalog__icon">\n\t\t\t\t\t\t<img src="./img/arrow_catalog.svg" alt="arrow" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class="catalog__card catalog__card--2">\n\t<div class="catalog__row">\n\t\t<div class="catalog__column catalog__column--1">\n\t\t\t<div class="catalog__textblock _anim-items _anim-no-hide">\n\t\t\t\t<div class="catalog__heading _anim-items _anim-no-hide">\n\t\t\t\t\t<h3>Perfect<br />Makeup&nbsp;3D</h3>\n\t\t\t\t</div>\n\t\t\t\t<p class="catalog__paragraph _anim-show _anim-show">\n\t\t\t\t\tPerfect Makeup&nbsp;3D<br />\n\t\t\t\t\tДобро пожаловать в&nbsp;мир макияжа!\n\t\t\t\t</p>\n\t\t\t\t<p class="catalog__paragraph _anim-show _anim-show">\n\t\t\t\t\tВыбирайте кисти, цвета и&nbsp;оттенки губной помады, подводки для&nbsp;глаз и&nbsp;пудры, чтобы добиться превосходного результата.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class="catalog__link link-catalog" id="popap-two-link--1">\n\t\t\t\t<div class="link-catalog__row">\n\t\t\t\t\t<span>Подробнее</span>\n\t\t\t\t\t<div class="link-catalog__icon">\n\t\t\t\t\t\t<img src="./img/arrow_catalog.svg" alt="arrow" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="catalog__column catalog__column--2">\n\t\t\t<div class="catalog__picture">\n\t\t\t\t<img src="./img/perfect_makeup.jpg" alt="perfect makeup" />\n\t\t\t</div>\n\t\t\t<div class="catalog__link link-catalog" id="popap-two-link--2">\n\t\t\t\t<div class="link-catalog__row">\n\t\t\t\t\t<span>Подробнее</span>\n\t\t\t\t\t<div class="link-catalog__icon">\n\t\t\t\t\t\t<img src="./img/arrow_catalog.svg" alt="arrow" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class="catalog__card catalog__card--3">\n\t<div class="catalog__row">\n\t\t<div class="catalog__column catalog__column--1">\n\t\t\t<div class="catalog__textblock _anim-items _anim-no-hide">\n\t\t\t\t<div class="catalog__heading _anim-items _anim-no-hide">\n\t\t\t\t\t<h3>Escape<br />Masters</h3>\n\t\t\t\t</div>\n\t\t\t\t<p class="catalog__paragraph _anim-show">Совершите идеальный побег!</p>\n\t\t\t\t<p class="catalog__paragraph _anim-show">Спаси напарников, собери сокровища и&nbsp;прокопай путь к&nbsp;свободе, но&nbsp;опасайся ловушек.</p>\n\t\t\t</div>\n\t\t\t<div class="catalog__link link-catalog" id="popap-three-link--1">\n\t\t\t\t<div class="link-catalog__row">\n\t\t\t\t\t<span>Подробнее</span>\n\t\t\t\t\t<div class="link-catalog__icon">\n\t\t\t\t\t\t<img src="./img/arrow_catalog.svg" alt="arrow" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="catalog__column catalog__column--2">\n\t\t\t<div class="catalog__picture">\n\t\t\t\t<img src="./img/escape_masters.jpg" alt="escape masters" />\n\t\t\t</div>\n\t\t\t<div class="catalog__link link-catalog" id="popap-three-link--2">\n\t\t\t\t<div class="link-catalog__row">\n\t\t\t\t\t<span>Подробнее</span>\n\t\t\t\t\t<div class="link-catalog__icon">\n\t\t\t\t\t\t<img src="./img/arrow_catalog.svg" alt="arrow" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class="catalog__card catalog__card--4">\n\t<div class="catalog__row">\n\t\t<div class="catalog__column catalog__column--1">\n\t\t\t<div class="catalog__textblock _anim-items _anim-no-hide">\n\t\t\t\t<div class="catalog__heading _anim-items _anim-no-hide">\n\t\t\t\t\t<h3>Hitmasters</h3>\n\t\t\t\t</div>\n\t\t\t\t<p class="catalog__paragraph _anim-show">Стань стрелком и&nbsp;срази всех врагов!</p>\n\t\t\t\t<p class="catalog__paragraph _anim-show">\n\t\t\t\t\tЦелься метко, используй объекты на&nbsp;уровнях и&nbsp;не&nbsp;дай никому спастись! Открывай новое оружие, пополняй свой арсенал и&nbsp;проходи головоломки.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class="catalog__link link-catalog" id="popap-four-link--1">\n\t\t\t\t<div class="link-catalog__row">\n\t\t\t\t\t<span>Подробнее</span>\n\t\t\t\t\t<div class="link-catalog__icon">\n\t\t\t\t\t\t<img src="./img/arrow_catalog.svg" alt="arrow" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="catalog__column catalog__column--2">\n\t\t\t<div class="catalog__picture">\n\t\t\t\t<img src="./img/hitmasters.jpg" alt="hitmasters" />\n\t\t\t</div>\n\t\t\t<div class="catalog__link link-catalog" id="popap-four-link--2">\n\t\t\t\t<div class="link-catalog__row">\n\t\t\t\t\t<span>Подробнее</span>\n\t\t\t\t\t<div class="link-catalog__icon">\n\t\t\t\t\t\t<img src="./img/arrow_catalog.svg" alt="arrow" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'
          , L = document.querySelector(".catalog__cards");
        w.addEventListener("click", (i => {
            L.insertAdjacentHTML("beforeend", f),
            b()
        }
        ))
    }
    if (document.getElementById("contacts-map")) {
        let y;
        function k() {
            let i = new ymaps.Map("contacts-map",{
                center: y,
                zoom: 15
            })
              , l = new ymaps.Placemark([55.98402461002773, 37.810707010804485],{},{
                iconLayout: "default#image",
                iconImageHref: "./img/flag.png",
                iconImageSize: [70, 81],
                iconImageOffset: [-19, -44]
            });
            i.controls.remove("geolocationControl"),
            i.controls.remove("searchControl"),
            i.controls.remove("trafficControl"),
            i.controls.remove("typeSelector"),
            i.controls.remove("fullscreenControl"),
            i.controls.remove("zoomControl"),
            i.controls.remove("rulerControl"),
            i.behaviors.disable(["scrollZoom"]),
            i.geoObjects.add(l)
        }
        window.innerWidth < 700 && (y = [55.98402461002773, 37.810707010804485]),
        window.innerWidth >= 700 && (y = [55.98382388185681, 37.81504854374692]),
        ymaps.ready(k)
    }
    function b() {
        const i = Array.from(document.querySelectorAll("._anim-items"));
        if (i.length > 0) {
            function l() {
                i.forEach((i => {
                    const l = i.offsetHeight
                      , s = t(i).top;
                    let e = window.innerHeight - l / 4;
                    l > window.innerHeight && (e = window.innerHeight - window.innerHeight / 4),
                    pageYOffset > s - e && pageYOffset < s + l ? i.classList.add("_active") : i.classList.contains("_anim-no-hide") || i.classList.remove("_active")
                }
                ))
            }
            function t(i) {
                const l = i.getBoundingClientRect()
                  , t = window.pageXOffset || document.documentElement.scrollLeft
                  , s = window.pageYOffset || document.documentElement.scrollTop;
                return {
                    top: l.top + s,
                    left: l.left + t
                }
            }
            window.addEventListener("scroll", l),
            setTimeout(( () => {
                l()
            }
            ), 300)
        }
    }
    document.querySelector(".popap__design-masters") && u({
        contentSelector: ".popap__design-masters",
        headerText: "Design Masters",
        modalId: "popapOneId",
        btnToShowSelector: "#popap-one-link--1",
        btnToShowSelector2: "#popap-one-link--2"
    }),
    document.querySelector(".popap__perfect-makeup") && u({
        contentSelector: ".popap__perfect-makeup",
        headerText: "Perfect Makeup",
        modalId: "popapTwoId",
        btnToShowSelector: "#popap-two-link--1",
        btnToShowSelector2: "#popap-two-link--2"
    }),
    document.querySelector(".popap__escape-masters") && u({
        contentSelector: ".popap__escape-masters",
        headerText: "Escape Masters",
        modalId: "popapThreeId",
        btnToShowSelector: "#popap-three-link--1",
        btnToShowSelector2: "#popap-three-link--2"
    }),
    document.querySelector(".popap__hitmasters") && u({
        contentSelector: ".popap__hitmasters",
        headerText: "Hitmasters",
        modalId: "popapFourId",
        btnToShowSelector: "#popap-four-link--1",
        btnToShowSelector2: "#popap-four-link--2"
    }),
    document.querySelector(".link-games") && Array.from(document.querySelectorAll(".link-games")).forEach((i => {
        i.addEventListener("click", (function(l) {
            l.preventDefault();
            const t = i.getAttribute("href");
            document.querySelector("" + t).scrollIntoView({
                block: "start",
                behavior: "smooth"
            })
        }
        ))
    }
    )),
    b()
}
)();
