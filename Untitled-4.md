root@462f1e2883c5:/# pip install psycopg2
Collecting psycopg2
  Downloading psycopg2-2.9.9.tar.gz (384 kB)
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 384.9/384.9 kB 13.9 MB/s eta 0:00:00
  Preparing metadata (setup.py) ... error
  error: subprocess-exited-with-error

  × python setup.py egg_info did not run successfully.
  │ exit code: 1
  ╰─> [23 lines of output]
      running egg_info
      creating /tmp/pip-pip-egg-info-i71_av41/psycopg2.egg-info
      writing /tmp/pip-pip-egg-info-i71_av41/psycopg2.egg-info/PKG-INFO
      writing dependency_links to /tmp/pip-pip-egg-info-i71_av41/psycopg2.egg-info/dependency_links.txt
      writing top-level names to /tmp/pip-pip-egg-info-i71_av41/psycopg2.egg-info/top_level.txt
      writing manifest file '/tmp/pip-pip-egg-info-i71_av41/psycopg2.egg-info/SOURCES.txt'

      Error: pg_config executable not found.

      pg_config is required to build psycopg2 from source.  Please add the directory
      containing pg_config to the $PATH or specify the full executable path with the
      option:

          python setup.py build_ext --pg-config /path/to/pg_config build ...

      or with the pg_config option in 'setup.cfg'.

      If you prefer to avoid building psycopg2 from source, please install the PyPI
      'psycopg2-binary' package instead.

      For further information please check the 'doc/src/install.rst' file (also at
      <https://www.psycopg.org/docs/install.html>).

      [end of output]

  note: This error originates from a subprocess, and is likely not a problem with pip.
error: metadata-generation-failed

× Encountered error while generating package metadata.
╰─> See above for output.

note: This is an issue with the package mentioned above, not pip.
hint: See above for details.

[notice] A new release of pip is available: 23.0.1 -> 23.3.1
[notice] To update, run: pip install --upgrade pip

sudo docker run --name postgres-alpha -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d -v pgalpha:/root/pgdata postgres

psql -h 172.17.0.2 -U postgres -d mydatabase -p 5432
psql -U postgres -d postgres -p 5432
psql -U postgres -d postgres

sudo docker build -t python-alpha:1.0 .
sudo docker run --name python-alpha python-alpha:1.0