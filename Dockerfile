FROM python:3.9-slim-buster

# Par défaut l’image utilise déjà root — pas besoin de le redéfinir
WORKDIR /app

# Copies et installation des dépendances en une seule couche
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copie du reste de l’application
COPY . .

# Création d’un groupe et d’un utilisateur système non‑root
RUN addgroup --system appuser \
 && adduser  --system --ingroup appuser appuser

# Passe à cet utilisateur pour l’exécution
USER appuser

EXPOSE 8080

CMD ["python", "manage.py", "runserver", "0.0.0.0:8080"]
