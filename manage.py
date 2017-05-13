#!/usr/bin/env python
import click
from flask.cli import FlaskGroup
from flask_migrate import MigrateCommand
from app import create_app


def create_cli_app(info):
    return create_app()


@click.group(cls=FlaskGroup, create_app=create_cli_app)
def cli():
    pass


cli.add_command(MigrateCommand, 'db')


if __name__ == '__main__':
    cli()
