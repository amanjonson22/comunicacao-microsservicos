FROM gradle:9.2.0-jdk25

COPY --chown=gradle:gradle . .
WORKDIR .

RUN gradle build -x test --no-daemon

EXPOSE 8081

CMD [ "gradle", "bootRun" ]