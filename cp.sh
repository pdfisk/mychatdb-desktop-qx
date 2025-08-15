echo 'copying...'
target_dir='/var/www/mychatdb/public_html'
rm -fr "${target_dir}/*"
mkdir ./deploy/js
mkdir ./deploy/scripts
cp ./source/boot/js/* ./deploy/js
cp ./source/boot/scripts/* ./deploy/scripts
cp -r ./source/resource/icons ./deploy/resource
cp -r ./source/resource/js ./deploy/resource
cp ../../vm/pyquest-brython/www/src/brython.js ./deploy/js
cp ../../vm/pyquest-brython/www/src/brython_stdlib.js ./deploy/js
cp -r ./deploy/* $target_dir
echo 'done'
