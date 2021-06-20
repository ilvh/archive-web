for file in *.JPEG
do
  mv "$file" "$(basename "$file" .JPEG).jpg"
done
