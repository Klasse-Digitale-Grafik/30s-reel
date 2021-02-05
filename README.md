# 30 second websites
Archive of experimental websites made by students of Klasse Digitale Grafik at HFBK Hamburg: https://2020.digitale-grafik.com

## Submit your website

1. Request a [FTP](https://github.com/Klasse-Digitale-Grafik/tutorials) account to connect to our shared server
2. Go to the `content` directory
3. Create a new folder like `YYYY-your-project-name`. Please note that you can only use `a-z0-9` and `-` characters

### Project metadata

4. Create a new file `website.json`

You can provide some metadata about your project using the `website.json` file like:
```json
{
  "title": "Project title, max 60 characters",
  "description": "Short description of your project, max 200 characters",
  "credits": "Your name, people or things you want to credit, max 200 characters"
}
```

Be careful to provide valid [json](https://github.com/Klasse-Digitale-Grafik/tutorials/blob/main/JSON.md) and not accidentally add a comma after the last entry. All strings will be shortened to the length stated above.

### For small static or php websites

Your project can be hosted on our server.

5. Upload your website into the directory you just created. `index.html` or `index.php` will be directory index.

BTW: `https://2020.digitale-grafik.com/content/{YYYY-your-project-name}/` will be the direct url to your project, if you want to share it without the 30 seconds presentation.

If you want to reference another website for further reading, add following line to the `website.json`:
```json
  "link": "https://..."
```

### For larger websites or non-Apache hosting

If you need databases, backend, have a lot of heavy assets, need sophisticated server setup, please host your project yourself.

5. Use the `website.json` file to provide a `source` url, from where the website can be embedded:
```json
  "source": "https://..."
```

### Troubleshooting

- Does your website work properly when you enter the website url directly?
- Check your browser console for errors
- Does your website allow iframe embeds?
- Do you have `.htaccess` rules (e.g. rewrites) that conflicts with global settings? If so, try playing with the `RewriteBase` setting

For external websites:
- Please make sure your host allows our host for Cross-Origin-Resource-Sharing ([CORS](https://httptoolkit.tech/blog/how-to-debug-cors-errors/))

## Development

If you want to work on this project, [clone](https://github.com/Klasse-Digitale-Grafik/tutorials/blob/main/GIT.md) the project via
```
git clone --recursive git@github.com:Klasse-Digitale-Grafik/30s-reel.git
```
and run it on you local PHP server.

If it doesn’t work, check if the `run` directory is empty. If so, you will need to re-init all git submodules via `git submodule update --init`

If you want to contribute your work, create a new branch or fork and issue a pull request.
