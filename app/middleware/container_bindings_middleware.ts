import { Logger } from '@adonisjs/core/logger'
import { HttpContext } from '@adonisjs/core/http'
import { NextFn } from '@adonisjs/core/types/http'

/**
 * Промежуточное программное обеспечение привязки контейнеров привязывает классы к их запросу.
 * конкретное значение с использованием преобразователя контейнера.
 *
 * - Привязываем класс «HttpContext» к объекту «ctx».
 * - И привязать класс «Logger» к объекту «ctx.logger».
 */
export default class ContainerBindingsMiddleware {
    handle(ctx: HttpContext, next: NextFn) {
        ctx.containerResolver.bindValue(HttpContext, ctx)
        ctx.containerResolver.bindValue(Logger, ctx.logger)

        return next()
    }
}
