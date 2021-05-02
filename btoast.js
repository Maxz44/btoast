// Require Bootstrap5 + alpinejs (no jquery)

let btoast = {
    // Variable containing markup
    // {{msg}} patern is used to replace with actual message
    success_alert: `<div class="alert alert-success alert-dismissible m-2" role="alert" x-data="{}" x-on:mouseenter="$el.classList.add('shadow')" x-on:mouseleave="$el.classList.remove('shadow')" x-init="setTimeout(function(){$el.remove()}, 5000)" style="cursor: pointer;" x-on:click="$el.remove()"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-check-circle fs-3"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path></svg><span>&nbsp;{{msg}}</span></div>`,
    info_alert: `<div role="alert" class="alert alert-info alert-dismissible m-2" x-data x-on:mouseenter="$el.classList.add('shadow')" x-on:mouseleave="$el.classList.remove('shadow')" x-init="setTimeout(function(){$el.remove()}, 5000)" style="cursor: pointer;" x-on:click="$el.remove()"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-info-circle fs-3"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"></path><circle cx="8" cy="4.5" r="1"></circle></svg><span>&nbsp;{{msg}}</span></div>`,
    warning_alert: `<div role="alert" class="alert alert-warning alert-dismissible m-2" x-data x-on:mouseenter="$el.classList.add('shadow')" x-on:mouseleave="$el.classList.remove('shadow')" x-init="setTimeout(function(){$el.remove()}, 5000)" style="cursor: pointer;" x-on:click="$el.remove()"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 -0.5 17 17" fill="currentColor" class="bi bi-exclamation-triangle fs-3"><path fill-rule="evenodd" d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"></path><path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"></path></svg><span>&nbsp;{{msg}}</span></div>`,
    error_alert: `<div role="alert" class="alert alert-danger alert-dismissible m-2" x-data x-on:mouseenter="$el.classList.add('shadow')" x-on:mouseleave="$el.classList.remove('shadow')" x-init="setTimeout(function(){$el.remove()}, 5000)" style="cursor: pointer;" x-on:click="$el.remove()"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-shield-exclamation fs-3"><path fill-rule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"></path><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path></svg><span>&nbsp;{{msg}}</span></div>`,
    container: `<div id="notif-panel" class="d-flex flex-column p-0" style="width: 250px;position: fixed;top:0;right:0;"></div>`,

    save_history: function(level, msg) {
        let alert_hist = this.get_history();
        let now = Math.floor(+new Date()/1000);
        alert_hist.push([level, now, msg]);
        localStorage.setItem("history", JSON.stringify(alert_hist));
    },

    get_history: function() {
        let alert_hist = localStorage.getItem("history");
    
        if (typeof(alert_hist) != "string") {
            alert_hist = "[]"
        }
        
        try {
            alert_hist = JSON.parse(alert_hist);
        } catch (error) {
            alert_hist = "[]"
        }
        
        if (!Array.isArray(alert_hist)) {
            alert_hist = []
        }
    
        return alert_hist;
    },

    success: function(msg) {
        this.save_history("Success", msg);
        msg = this.success_alert.replace('{{msg}}', msg);
        let panel = document.querySelector("#notif-panel");
        panel.insertAdjacentHTML("afterbegin", msg);
    },

    info: function(msg) {
        this.save_history("Info", msg);
        msg = this.info_alert.replace('{{msg}}', msg);
        let panel = document.querySelector("#notif-panel");
        panel.insertAdjacentHTML("afterbegin", msg);
    },

    warning: function(msg) {
        this.save_history("Warning", msg);
        msg = this.warning_alert.replace('{{msg}}', msg);
        let panel = document.querySelector("#notif-panel");
        panel.insertAdjacentHTML("afterbegin", msg);
    },

    error: function(msg) {
        this.save_history("Error", msg);
        msg = this.error_alert.replace('{{msg}}', msg);
        let panel = document.querySelector("#notif-panel");
        panel.insertAdjacentHTML("afterbegin", msg);
    },

    init: function(){
        document.body.insertAdjacentHTML("afterbegin", this.container);
    }

}

if (document.readyState !== 'loading') {
    btoast.init();
} else {
  document.addEventListener('DOMContentLoaded', function(){
    btoast.init();
  });
}