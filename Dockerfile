
FROM debian:12-slim AS build

# hadolint ignore=DL3008
RUN apt-get update && \
    apt-get install --no-install-suggests --no-install-recommends --yes python3-venv gcc libpython3-dev && \
    python3 -m venv /venv && \
    # clean apt cache to reduce image size
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

FROM build AS build-venv

COPY requirements.txt /requirements.txt
RUN /venv/bin/pip install --disable-pip-version-check -r /requirements.txt


FROM gcr.io/distroless/python3-debian12:debug
COPY --from=build-venv /venv /venv

WORKDIR /app

COPY . .


EXPOSE 8080

ENTRYPOINT ["/venv/bin/python3","manage.py", "runserver", "0.0.0.0:8080"]