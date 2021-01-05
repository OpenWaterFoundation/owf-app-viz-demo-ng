#!/bin/bash
(set -o igncr) 2>/dev/null && set -o igncr; # this comment is required
# The above line ensures that the script can be run on Cygwin/Linux even with Windows CRNL
# testing using the following: ./copy-gapminder-to-ng-app.sh --destinationCode='./../../owf-app-infomapper-ng/infomapper/src/app/map-components/dialog-content/dialog-gapminder' --destinationAssets='./../../owf-app-infomapper-ng/infomapper/src/assets'



# This script copies files from the GapMinder source repository into an Angular application.
#
# This script should be called by specifying the install (destination) folder using the
# --destinationCode=folder and --destinationAssets=folder command line parameters.
#
# The latest Gapminder version files are copied.

# Supporting functions, alphabetized...

# Copy the Gapminder D3 version 6 files into Angular application files.
# - TODO Need to explain with more comments specifically what is going on.
# - first parameter is the Gapminder repo folder
# - second parameter is the destination folder for Gapminder code files
# - third parameter is the destination folder for Gapminder asset files
# '-z' string: True if the string is null (an empty string)
copyGapminderD3Version6Files() {
  if [ -z "${1}" ]; then
    logError "copyGapminderD3Version6Files first argument should be repo folder - check script."
    return 1
  fi
  if [ -z "${2}" ]; then
    logError "copyGapminderD3Version6Files second argument should be destination folder for code - check script."
    return 1
  fi
  if [ -z "${3}" ]; then
    logError "copyGapminderD3Version6Files third argument should be destination folder for assets - check script."
    return 1
  fi

  # Set the full path to source and destination folders.
  SOURCE="${1}/viz-demo-ng/src/app/dialog-content/dialog-gapminder"
  destinationCodeFolder="${2}"
  SRCASSETS="${1}/viz-demo-ng/src/assets/gapminder-data"
  destinationAssetsFolder="${3}"

  # Check that the folders exist.
  if [ ! -d "${SOURCE}" ]; then
    logError "The source folder does not exist:  ${SOURCE}"
    return 1
  fi
  if [ ! -d "${destinationCodeFolder}" ]; then
    logError "The destination folder does not exist:  ${destinationCodeFolder}"
    return 1
  fi
    if [ ! -d "${destinationAssetsFolder}" ]; then
    logError "The destination folder does not exist:  ${destinationCodeFolder}"
    return 1
  fi

  # COPY NEEDED DIRECTORIES

  # TODO smalers 2020-12-21
  # - here probably need to remove the old files because filenames may have changed
  #   and don't want to clutter up the application repo with old files that are not used
  # rm -rv "$destinationCodeFolder/css" 
  # rm -rv "$destinationCodeFolder/js" 
  # rm -rv "$destinationCodeFolder/dialog-gapminder.component.css" 
  # rm -rv "$destinationCodeFolder/dialog-gapminder.component.html" 
  # rm -rv "$destinationCodeFolder/dialog-gapminder.component.ts"
  # rm -rv "$destinationCodeFolder/README.md" 
  # rm -rv "$destinatinAssetsFolder" 

  # Copy files, using -v for verbose so file names are printed as copied.
  # rm -rv "$destinationCodeFolder/script-test" 
  # cp -rv "$SOURCE/test-script" $destinationCodeFolder

  cp -rv "$SOURCE/css" $destinationCodeFolder
  cp -rv "$SOURCE/js" $destinationCodeFolder
  cp -rv "$SOURCE/dialog-gapminder.component.css" $destinationCodeFolder
  cp -rv "$SOURCE/dialog-gapminder.component.html" $destinationCodeFolder
  cp -rv "$SOURCE/dialog-gapminder.component.ts" $destinationCodeFolder
  cp -rv "$SOURCE/README.md" $destinationCodeFolder
  cp -rv "$SRCASSETS" $destinationAssetsFolder

  #INFOMAPPER GLOBAL STYLING PATH
  # TODO smalers 2020-12-21 the following needs to be relative to a starting folder.
  # - if necessary the script may need another parameter like --destinationStyle=.....
  STYLECSS="./../../owf-app-infomapper-ng/infomapper/src/styles.css"

  #GLOBAL IMPORTS 
  # TODO smalers 2020-12-21 need to explain what the following is doing.... ALL of the following.
  IMPSELECT2="@import \"../node_modules/select2/dist/css/select2.min.css\";"
  IMPGAPSTYLE="@import \"./app/map-components/dialog-content/dialog-gapminder/css/style.css\";"
  
  # Check that the file exists.
  if [ ! -f "${STYLECSS}" ]; then
    logError "The source file does not exist:  ${STYLECSS}"
    return 1
  fi

  # ASK TO MODIFY GLOBALS.CSS
  if grep -Fxq "$IMPSELECT2" $STYLECSS
  then
      echo "Contains"
  else
      echo "Your file does not contain the needed global imports?"
         read -p "Would you like this script to modify your file? Y/N: " ANSWER
        case "$ANSWER" in 
            [yY] | [yY][eE][sS])  # must have the ')' at the end of case
                  sed stream editor, used to write to file 
                 sed -i "1i\ $IMPSELECT2" $STYLECSS
                 sed -i "1i\ $IMPGAPSTYLE" $STYLECSS
                 echo "File modified"
                ;;     # close the case
            [nN] | [nN][oO])
                 echo "No files modified: Manually add the following imports to your file";
                 echo "@import \"../node_modules/select2/dist/css/select2.min.css\";"
                 echo "@import \"./app/map-components/dialog-content/dialog-gapminder/css/style.css\";"
                ;;
            *)      # default case
                echo "Please enter y/yes or n/no"
                ;;
        esac
  fi

  logInfo "Remember to do the following in the Angular application:"
  logInfo "- Make sure the appropriate dependencies are installed via npm: D3, clusterize, select2, papaparse"
  logInfo "- Create a method that will pass the configuration path to gapminder() function or hardcode configuration path within TypeScript file"
  logInfo "- Adjust path for the clusterize import statement in 'dialog-gaminder.component'"

  return 0
}

# Echo to stderr
# - if necessary, quote the string to be printed
# - this function is called to print various message types
echoStderr() {
  echo "$@" 1>&2
}
  
# Print a DEBUG message, currently prints to stderr.
logDebug() {
   echoStderr "[DEBUG] $@"
}

# Print an ERROR message, currently prints to stderr.
logError() {
   echoStderr "[ERROR] $@"
}

# Print an INFO message, currently prints to stderr.
logInfo() {
   echoStderr "[INFO] $@"
}

# Print an WARNING message, currently prints to stderr.
logWarning() {
   echoStderr "[WARNING] $@"
}

# Parse the command parameters
# - use the getopt command line program so long options can be handled
parseCommandLine() {
  # Single character options
  optstring="hv"
  # Long options
  optstringLong="destinationCode::,destinationAssets::,d3version::,dryrun,help,version"
  # Parse the options using getopt command
  GETOPT_OUT=$(getopt --options $optstring --longoptions $optstringLong -- "$@")
  exitCode=$?
  if [ $exitCode -ne 0 ]; then
    # Error parsing the parameters such as unrecognized parameter
    echoStderr ""
    printUsage
    exit 1
  fi
  # The following constructs the command by concatenating arguments
  eval set -- "$GETOPT_OUT"
  # Loop over the options
  while true; do
    #logDebug "Command line option is ${opt}"
    case "$1" in
      --destinationAssets) # --destinationAssets=folder  Specify the destination assets folder.
        case "$2" in
          "") # Nothing specified so error
            logError "--destinationAssets=folder is missing folder name"
            exit 1
            ;;
          *) # folder has been specified
            destinationAssetsFolder=$2
            shift 2
            ;;
        esac
        ;;
      --destinationCode) # --destinationCode=folder  Specify the destination code folder.
        case "$2" in
          "") # Nothing specified so error
            logError "--destinationCode=folder is missing folder name"
            exit 1
            ;;
          *) # folder has been specified
            destinationCodeFolder=$2
            shift 2
            ;;
        esac
        ;;
      --dryrun) # --dryrun  Could be used to echo copy statements without executing
        logInfo "--dryrun detected - will echo statements but not execute"
        dryrun="--dryrun"
        shift 1
        ;;
      --d3version) # --d3version=N  Specify the D3 version
        case "$2" in
          "") # Nothing specified so error
            logError "--d3version=N is missing version number"
            exit 1
            ;;
          *) # folder has been specified
            destinationFolder=$2
            shift 2
            ;;
        esac
        ;;
      -h|--help) # -h or --help  Print the program usage
        printUsage
        exit 0
        ;;
      -v|--version) # -v or --version  Print the program version
        printVersion
        exit 0
        ;;
      --) # No more arguments
        shift
        break
        ;;
      *) # Unknown option
        logError ""
        logError "Invalid option $1." >&2
        printUsage
        exit 1
        ;;
    esac
  done
}

# Print the program usage to stderr.
# - calling code must exit with appropriate code
printUsage() {
  echoStderr ""
  echoStderr "Usage:  $programName --destination=folder"
  echoStderr ""
  echoStderr "Copy Gapminder files to an Angular application to allow use in the application."
  echoStderr ""
  echoStderr "--destinationCode=folder    Specify the 'src' folder to copy files to."
  echoStderr "                            This should be the component folder for GapMinder code."
  echoStderr "                            It is best to specify as a full path to avoid confusion."
  echoStderr "--destinationAssets=folder  Specify the 'assets' folder to copy files to."
  echoStderr "                            It is best to specify as a full path to avoid confusion."
  echoStderr "--d3version=N               Specify which D3 version of Gapminder to copy."
  echoStderr "                            The default is the latest available version."
  echoStderr "--dryrun                    Do a dryrun but don't actually upload anything."
  echoStderr "-h or --help                Print the usage."
  echoStderr "-v or --version             Print the version and copyright/license notice."
  echoStderr ""
}

# Print the script version and copyright/license notices to stderr.
# - calling code must exit with appropriate code
printVersion() {
  echoStderr ""
  echoStderr "${programName} version ${programVersion} ${programVersionDate}"
  echoStderr ""
  echoStderr "OWF Gapminder"
  echoStderr "Copyright 2020 Open Water Foundation."
  echoStderr ""
  echoStderr "License GPLv3+:  GNU GPL version 3 or later"
  echoStderr ""
  echoStderr "There is ABSOLUTELY NO WARRANTY; for details see the"
  echoStderr "'Disclaimer of Warranty' section of the GPLv3 license in the LICENSE file."
  echoStderr "This is free software: you are free to change and redistribute it"
  echoStderr "under the conditions of the GPLv3 license in the LICENSE file."
  echoStderr ""
}

# Main entry point into script.

programName=$(basename $0)
programVersion="1.0.0"
programVersionDate="2020-12-21"

# Get the folder where the script is located since it may be run from any folder.
# The folloowing assumes that the script resides in 'build-util/' folder of the repo.
# If this is not the case, then adjust folders accordingly.
scriptFolder=$(cd $(dirname "$0") && pwd)
# mainFolder is infomapper
repoFolder=$(dirname ${scriptFolder})


# Parse the command line.
# - set defaults here before parsing
d3Version=6
parseCommandLine "$@"

if [ "${d3Version}" = "6" ]; then
  # Pass what is needed to the function
  echo "Inside v6 condition"
  copyGapminderD3Version6Files ${repoFolder} ${destinationCodeFolder} ${destinationAssetsFolder}
  if [ $? -ne 0 ]; then
    logError "Error copying files."
    exit 1
fi
else
  logError "Requested D3 version ${d3Version} is not supported.  Available version is 6."
  printUsage
  exit 1
fi

exit 0
