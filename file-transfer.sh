#! /bin/bash

# COPY NEEDED DIRECTORIES
SOURCE="./viz-demo-ng/src/app/dialog-content/dialog-gapminder"
DESTINATION="./../owf-app-infomapper-ng/infomapper/src/app/map-components/dialog-content/dialog-gapminder"
SRCASSETS="./viz-demo-ng/src/assets/gapminder-data"
DSTASSETS="./../owf-app-infomapper-ng/infomapper/src/assets/gapminder-data"
cp -r "$SOURCE/css" $DESTINATION
cp -r "$SOURCE/js" $DESTINATION
cp -r "$SOURCE/dialog-gapminder.component.css" $DESTINATION
cp -r "$SOURCE/dialog-gapminder.component.html" $DESTINATION
cp -r "$SOURCE/dialog-gapminder.component.ts" $DESTINATION
cp -r "$SRCASSETS" $DSTASSETS


#INFOMAPPER GLOBAL STYLING PATH
STYLECSS="./../owf-app-infomapper-ng-master/infomapper/src/styles.css"

#GLOBAL IMPORTS 
IMPSELECT2="@import \"../node_modules/select2/dist/css/select2.min.css\";"
IMPGAPSTYLE="@import \"./app/gapminder/gapminder-js/css/style.css\";"


if grep -Fxq "$IMPSELECT2" $STYLECSS
then
    echo "Contains"
else
    echo "Does not contain"
    sed -i "1i\ $IMPSELECT2" $STYLECSS
    # WHILE LOOP - READ THROUGH A FILE LINE BY LINE
    # LINE=1
    # while read -r CURRENT_LINE
    #   do
    #     echo "$LINE: $CURRENT_LINE"
    #     ((LINE++))
    # done < "$STYLECSS"
fi

if grep -Fxq "$IMPGAPSTYLE" $STYLECSS
then
    echo "Contains"
else
    echo "Does not contain"
    sed -i "1i\ $IMPGAPSTYLE" $STYLECSS
fi

# function fileTransfer(){
# SOURCE="./viz-demo-ng/src/app/gapminder/gapminder-js"
# DESTINATION 
# }