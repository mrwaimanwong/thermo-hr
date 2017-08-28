# Uses php cli to run all php files in the current directory and write their output to file
# Argument 1 is the extension of the output files e.g. ".html" or ".htm"
# Argument 2 is a prefix for the filenames
for file in *.php; do
	php $file | cat > "../../"${file%.php}".html";
done
