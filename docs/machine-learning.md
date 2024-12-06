# Proyección y Machine Learning

## Modelo de Predicción

Se entrenó un modelo **Random Forest Regressor** para predecir el flujo de pasajeros en estaciones clave, utilizando las siguientes variables:
- **Estación.**
- **Período del día:** Morning, Afternoon, Evening.
- **Tipo de día:** Laboral o fin de semana.
- **Temporada:** Alta o baja.

### Resultados del Modelo

El modelo alcanzó los siguientes indicadores:
- **Error cuadrático medio (RMSE):** 980.56.
- **Coeficiente de determinación (R²):** 0.88.

### Predicciones Clave

Proyección de flujo en estaciones principales durante la temporada alta:
- **Constitución (mañana):** ~40,560 pasajeros.
- **Retiro (tarde):** ~11,017 pasajeros.
- **San Pedrito (mañana):** ~12,349 pasajeros.

### Visualización del Flujo por Período

El siguiente gráfico muestra la comparación del flujo promedio por estación y período:
![Flujo Promedio por Período](/img/flujo-promedio-periodos.png)

---
