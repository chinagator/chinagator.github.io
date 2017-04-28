# A sample Guardfile
# More info at https://github.com/guard/guard#readme

## Uncomment and set this to only include directories you want to watch
# directories %w(app lib config test spec features)

## Uncomment to clear the screen before every task
# clearing :on

## Guard internally checks for changes in the Guardfile and exits.
## If you want Guard to automatically start up again, run guard in a
## shell loop, e.g.:
##
##  $ while bundle exec guard; do echo "Restarting Guard..."; done
##
## Note: if you are using the `directories` clause above and you are not
## watching the project directory ('.'), then you will want to move
## the Guardfile to a watched dir and symlink it back, e.g.
#
#  $ mkdir config
#  $ mv Guardfile config/
#  $ ln -s config/Guardfile .
#
# and, you'll have to watch "config/Guardfile" instead of "Guardfile"

# Sample guardfile block for Guard::Haml
# You can use some options to change guard-haml configuration
# output: 'public'                   set output directory for compiled files
# input: 'src'                       set input directory with haml files
# run_at_start: true                 compile files when guard starts
# notifications: true                send notifictions to Growl/libnotify/Notifu
# haml_options: { ugly: true }    pass options to the Haml engine

guard :haml do
  watch(/^[^\._].+(\.haml)$/)

  watch("_conferences.haml") { "publications.haml" }
  watch("_journals.haml") { "publications.haml" }
  watch("_workshops.haml") {"publications.haml"}
  watch("_preprints.haml") {"publications.haml"}
  watch("_invited.haml") {"talks.haml"}
  watch("_news.haml") { "index.haml" }
  watch("_nav.haml") {"index.haml"}
end

guard :shell do
  watch "publications.py" do
    `./publications.py haml > _conferences.haml`
    `./publications.py haml_article > _journals.haml`
    `./publications.py haml_preprint > _preprints.haml`
    `./publications.py haml_news > _news.haml`
  end
end
