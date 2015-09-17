(function () {
    var app = angular.module('TotebagApp', []);

    app.controller('TotebagController', function () {
        var self = this;
        self.selectedItem = {};
        self.items = bags;

        self.hideAllPages = function () {
            $("#vyrobky").hide();
            $("#vyrobek-detail").hide();
            $("#o-nas").hide();
            $("#nas-pribeh").hide();
            $("#kontakty").hide();

        }

        self.GoToDetail = function (item) {
            self.selectedItem = item;
            self.hideAllPages();
            $("#vyrobek-detail").fadeIn();

            var title = 'Detail výrobku: ' + item.title;
            document.title = title;
            window.history.pushState("", title, '?detail');
        }                                        
                                                 
        self.GoToBags = function () {
            self.items = bags;
            self.hideAllPages();
            $("#vyrobky").fadeIn();              
                                                 
            var title = 'Totebag - tašky';       
            document.title = title;              
            window.history.pushState("", title, '?tašky');
        }                                        
                                                 
        self.GoToPillows = function () {
            self.items = pillows;
            self.hideAllPages();
            $("#vyrobky").fadeIn();              
                                                 
            var title = 'Totebag - polštáře';    
            document.title = title;              
            window.history.pushState("", title, '?polštáře');
        }                                        
                                                 
        self.GoToDecorations = function () {
            self.items = decorations;
            self.hideAllPages();
            $("#vyrobky").fadeIn();              
                                                 
            var title = 'Totebag - dekorace';    
            document.title = title;              
            window.history.pushState("", title, '?dekorace');
        }                                        
                                                 
        self.GoToAboutUs = function () {
            self.items = decorations;
            self.hideAllPages();
            $("#o-nas").fadeIn();                
                                                 
            var title = 'Totebag - o nás';    
            document.title = title;              
            window.history.pushState("", title, '?o-nás');
        }

        self.GoToOurStory = function () {
            self.items = decorations;
            self.hideAllPages();
            $("#nas-pribeh").fadeIn();
                                                 
            var title = 'Totebag - náš příběh';
            document.title = title;              
            window.history.pushState("", title, '?náš-příběh');
        }

        self.GoToContacts = function () {
            self.items = decorations;
            self.hideAllPages();
            $("#kontakty").fadeIn();
                                                 
            var title = 'Totebag - kontakty';
            document.title = title;              
            window.history.pushState("", title, '?kontakty');
        }

        window.onpopstate = function () {
            if (location.search !== '?detail') {
                self.GoToDecorations();
            }
        };
    });

    $("#vyrobky").show();
})();
