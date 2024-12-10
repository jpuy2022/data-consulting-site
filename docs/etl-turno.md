# Transformación: turno

## ¿Por qué se crea el campo turno?

Los registros de flujo de personas por cada estación estan tomados cada 15 minutos. El crear un nuevo campo, a partir de este tiempo, nos permite agrupar el flujo en cuatro grupos _("morning", "noon", "after" y "evenig")_ y asi poder tomar mejores decisiones.

---
![](/img/ETL-turno.png)


---

## Ventajas de campo **Turno**

1. **Estandarización**:
   - Organiza datos espaciales en un formato uniforme.
2. **Escalabilidad**:
   - Compatible con futuros registros de otras fuentes.
3. **Análisis Eficiente**:
   - Ideal para identificar patrones y tendencias espaciales.

---

## Ejemplo practico:

Mayor flujo de personas en turno mañana: 
1. Aumentar personal en dicho turno
1. Crear promociones especiales
1. Actividades de marketing en horarios de menor flujo
1. etc


