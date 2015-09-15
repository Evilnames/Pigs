<!DOCTYPE html>
<html ng-app>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
        <link href="js/bootstrap.css" rel="stylesheet">
        <script src="js/jquery.js"></script>
        <script src="js/angular.js"></script>
        <script src="js/pigs.js" type="text/javascript"></script>
    </head>
    <body>
        <div class="container">

            <div class="span12 well">
                <h2>Pig Raiser</h2>
            </div>
            <div ng-controller="game">
                <div class="row-fluid">
                    <div class="span4">
                        Gold : <b>{{objects.gold}}</b> <br/>
                        You have <b>{{objects.pigs}}</b> Pigs.<br/>
                        You are able to sell a pig for <b>{{objects.sellcost}}</b> Gold<br/>

                        There is <b>{{objects.feed}}</b> Feed on your farm.<br/>
                        The cost for one feed stock is <b>{{objects.feedcost}}</b><br/>
                        <br/>
                        Your pigs eat <b>{{objects.eaten}}</b> feed per day.
                    </div>

                    <div class="span4">
                        Your happiness level : {{objects.humanhappy}}/100<br/>
                        Pig Happiness level : {{objects.pighappy}}/100<br/>
                        City Happiness level : {{objects.cityhappy}}/100<br/>
                        Kingdom Happiness Level : {{objects.kingdomhappy}}/100<br/>
                    </div>
                </div>
                <div class="span12">
                    <div class="span11">
                        <h3>Options</h3>
                    </div>

                    <div class="span3 inline">
                        <label>
                        Buy a new pig
                        </label>
                        <button ng-click="build('pigs')">Buy a new pig</button><br/>
                        <label>Play a song for your pigs (Increase pig happiness, but you're in the fields playing songs to your pigs...)</label>
                        <button ng-click="build('playsong')">Play a song</button><br/>
                        <label>Gamble at the Inn (Increase money by 25, lose city happiness by 5)</label>
                        <button ng-click="build('gamble')">Gamble in the City</button><br/>
                        <label>Go into the back and wash your pigs!</label>
                        <button ng-click="build('washpigs')">Wash Pigs</button><br/>
                    </div>


                </div>
                <div>

                </div>
            </div>
        </div>
    </body>
</html>
