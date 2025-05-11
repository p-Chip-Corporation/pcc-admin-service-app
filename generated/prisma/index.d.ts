
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserPermission
 * 
 */
export type UserPermission = $Result.DefaultSelection<Prisma.$UserPermissionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model AccountActivation
 * 
 */
export type AccountActivation = $Result.DefaultSelection<Prisma.$AccountActivationPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model AccountDevices
 * 
 */
export type AccountDevices = $Result.DefaultSelection<Prisma.$AccountDevicesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  IC: 'IC'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PermissionType: {
  VIEW: 'VIEW',
  ADD: 'ADD',
  EDIT: 'EDIT',
  DELETE: 'DELETE'
};

export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType]


export const ResourceType: {
  DEVICE: 'DEVICE',
  ACCOUNT: 'ACCOUNT',
  ACCOUNT_DEVICE: 'ACCOUNT_DEVICE',
  ACTIVATION_CODE: 'ACTIVATION_CODE',
  USERS: 'USERS',
  USER_PERMISSIONS: 'USER_PERMISSIONS'
};

export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PermissionType = $Enums.PermissionType

export const PermissionType: typeof $Enums.PermissionType

export type ResourceType = $Enums.ResourceType

export const ResourceType: typeof $Enums.ResourceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPermission`: Exposes CRUD operations for the **UserPermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPermissions
    * const userPermissions = await prisma.userPermission.findMany()
    * ```
    */
  get userPermission(): Prisma.UserPermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountActivation`: Exposes CRUD operations for the **AccountActivation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountActivations
    * const accountActivations = await prisma.accountActivation.findMany()
    * ```
    */
  get accountActivation(): Prisma.AccountActivationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accountDevices`: Exposes CRUD operations for the **AccountDevices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountDevices
    * const accountDevices = await prisma.accountDevices.findMany()
    * ```
    */
  get accountDevices(): Prisma.AccountDevicesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserPermission: 'UserPermission',
    Account: 'Account',
    AccountActivation: 'AccountActivation',
    Device: 'Device',
    AccountDevices: 'AccountDevices'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userPermission" | "account" | "accountActivation" | "device" | "accountDevices"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserPermission: {
        payload: Prisma.$UserPermissionPayload<ExtArgs>
        fields: Prisma.UserPermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          findFirst: {
            args: Prisma.UserPermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          findMany: {
            args: Prisma.UserPermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>[]
          }
          create: {
            args: Prisma.UserPermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          createMany: {
            args: Prisma.UserPermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>[]
          }
          delete: {
            args: Prisma.UserPermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          update: {
            args: Prisma.UserPermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          deleteMany: {
            args: Prisma.UserPermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>[]
          }
          upsert: {
            args: Prisma.UserPermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPermissionPayload>
          }
          aggregate: {
            args: Prisma.UserPermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPermission>
          }
          groupBy: {
            args: Prisma.UserPermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPermissionCountArgs<ExtArgs>
            result: $Utils.Optional<UserPermissionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      AccountActivation: {
        payload: Prisma.$AccountActivationPayload<ExtArgs>
        fields: Prisma.AccountActivationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountActivationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountActivationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountActivationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountActivationPayload>
          }
          findFirst: {
            args: Prisma.AccountActivationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountActivationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountActivationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountActivationPayload>
          }
          findMany: {
            args: Prisma.AccountActivationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountActivationPayload>[]
          }
          create: {
            args: Prisma.AccountActivationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountActivationPayload>
          }
          createMany: {
            args: Prisma.AccountActivationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountActivationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountActivationPayload>[]
          }
          delete: {
            args: Prisma.AccountActivationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountActivationPayload>
          }
          update: {
            args: Prisma.AccountActivationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountActivationPayload>
          }
          deleteMany: {
            args: Prisma.AccountActivationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountActivationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountActivationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountActivationPayload>[]
          }
          upsert: {
            args: Prisma.AccountActivationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountActivationPayload>
          }
          aggregate: {
            args: Prisma.AccountActivationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountActivation>
          }
          groupBy: {
            args: Prisma.AccountActivationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountActivationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountActivationCountArgs<ExtArgs>
            result: $Utils.Optional<AccountActivationCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      AccountDevices: {
        payload: Prisma.$AccountDevicesPayload<ExtArgs>
        fields: Prisma.AccountDevicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountDevicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDevicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountDevicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDevicesPayload>
          }
          findFirst: {
            args: Prisma.AccountDevicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDevicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountDevicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDevicesPayload>
          }
          findMany: {
            args: Prisma.AccountDevicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDevicesPayload>[]
          }
          create: {
            args: Prisma.AccountDevicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDevicesPayload>
          }
          createMany: {
            args: Prisma.AccountDevicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountDevicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDevicesPayload>[]
          }
          delete: {
            args: Prisma.AccountDevicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDevicesPayload>
          }
          update: {
            args: Prisma.AccountDevicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDevicesPayload>
          }
          deleteMany: {
            args: Prisma.AccountDevicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountDevicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountDevicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDevicesPayload>[]
          }
          upsert: {
            args: Prisma.AccountDevicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountDevicesPayload>
          }
          aggregate: {
            args: Prisma.AccountDevicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountDevices>
          }
          groupBy: {
            args: Prisma.AccountDevicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountDevicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountDevicesCountArgs<ExtArgs>
            result: $Utils.Optional<AccountDevicesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userPermission?: UserPermissionOmit
    account?: AccountOmit
    accountActivation?: AccountActivationOmit
    device?: DeviceOmit
    accountDevices?: AccountDevicesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdAccounts: number
    createdDevices: number
    createdAccountActivations: number
    createdAccountDevices: number
    createdUserPermission: number
    permissions: number
    createdUsers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdAccounts?: boolean | UserCountOutputTypeCountCreatedAccountsArgs
    createdDevices?: boolean | UserCountOutputTypeCountCreatedDevicesArgs
    createdAccountActivations?: boolean | UserCountOutputTypeCountCreatedAccountActivationsArgs
    createdAccountDevices?: boolean | UserCountOutputTypeCountCreatedAccountDevicesArgs
    createdUserPermission?: boolean | UserCountOutputTypeCountCreatedUserPermissionArgs
    permissions?: boolean | UserCountOutputTypeCountPermissionsArgs
    createdUsers?: boolean | UserCountOutputTypeCountCreatedUsersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedAccountActivationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountActivationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedAccountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountDevicesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedUserPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPermissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPermissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    devices: number
    activations: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | AccountCountOutputTypeCountDevicesArgs
    activations?: boolean | AccountCountOutputTypeCountActivationsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountDevicesWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountActivationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountActivationWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    accounts: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | DeviceCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountDevicesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    localAccountId: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    localAccountId: string | null
    name: string | null
    email: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    localAccountId: number
    name: number
    email: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    localAccountId?: true
    name?: true
    email?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    localAccountId?: true
    name?: true
    email?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    localAccountId?: true
    name?: true
    email?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    localAccountId: string | null
    name: string
    email: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    createdById: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    localAccountId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdAccounts?: boolean | User$createdAccountsArgs<ExtArgs>
    createdDevices?: boolean | User$createdDevicesArgs<ExtArgs>
    createdAccountActivations?: boolean | User$createdAccountActivationsArgs<ExtArgs>
    createdAccountDevices?: boolean | User$createdAccountDevicesArgs<ExtArgs>
    createdUserPermission?: boolean | User$createdUserPermissionArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    localAccountId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    localAccountId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    localAccountId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "localAccountId" | "name" | "email" | "role" | "isActive" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdAccounts?: boolean | User$createdAccountsArgs<ExtArgs>
    createdDevices?: boolean | User$createdDevicesArgs<ExtArgs>
    createdAccountActivations?: boolean | User$createdAccountActivationsArgs<ExtArgs>
    createdAccountDevices?: boolean | User$createdAccountDevicesArgs<ExtArgs>
    createdUserPermission?: boolean | User$createdUserPermissionArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | User$createdByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdAccounts: Prisma.$AccountPayload<ExtArgs>[]
      createdDevices: Prisma.$DevicePayload<ExtArgs>[]
      createdAccountActivations: Prisma.$AccountActivationPayload<ExtArgs>[]
      createdAccountDevices: Prisma.$AccountDevicesPayload<ExtArgs>[]
      createdUserPermission: Prisma.$UserPermissionPayload<ExtArgs>[]
      permissions: Prisma.$UserPermissionPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      createdUsers: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      localAccountId: string | null
      name: string
      email: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      createdById: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdAccounts<T extends User$createdAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdDevices<T extends User$createdDevicesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdDevicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdAccountActivations<T extends User$createdAccountActivationsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdAccountActivationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdAccountDevices<T extends User$createdAccountDevicesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdAccountDevicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdUserPermission<T extends User$createdUserPermissionArgs<ExtArgs> = {}>(args?: Subset<T, User$createdUserPermissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends User$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends User$createdByArgs<ExtArgs> = {}>(args?: Subset<T, User$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdUsers<T extends User$createdUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly localAccountId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly createdById: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdAccounts
   */
  export type User$createdAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.createdDevices
   */
  export type User$createdDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User.createdAccountActivations
   */
  export type User$createdAccountActivationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
    where?: AccountActivationWhereInput
    orderBy?: AccountActivationOrderByWithRelationInput | AccountActivationOrderByWithRelationInput[]
    cursor?: AccountActivationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountActivationScalarFieldEnum | AccountActivationScalarFieldEnum[]
  }

  /**
   * User.createdAccountDevices
   */
  export type User$createdAccountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    where?: AccountDevicesWhereInput
    orderBy?: AccountDevicesOrderByWithRelationInput | AccountDevicesOrderByWithRelationInput[]
    cursor?: AccountDevicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountDevicesScalarFieldEnum | AccountDevicesScalarFieldEnum[]
  }

  /**
   * User.createdUserPermission
   */
  export type User$createdUserPermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    where?: UserPermissionWhereInput
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    cursor?: UserPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * User.permissions
   */
  export type User$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    where?: UserPermissionWhereInput
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    cursor?: UserPermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * User.createdBy
   */
  export type User$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.createdUsers
   */
  export type User$createdUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserPermission
   */

  export type AggregateUserPermission = {
    _count: UserPermissionCountAggregateOutputType | null
    _min: UserPermissionMinAggregateOutputType | null
    _max: UserPermissionMaxAggregateOutputType | null
  }

  export type UserPermissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    resource: $Enums.ResourceType | null
    permission: $Enums.PermissionType | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPermissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    resource: $Enums.ResourceType | null
    permission: $Enums.PermissionType | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPermissionCountAggregateOutputType = {
    id: number
    userId: number
    resource: number
    permission: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPermissionMinAggregateInputType = {
    id?: true
    userId?: true
    resource?: true
    permission?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPermissionMaxAggregateInputType = {
    id?: true
    userId?: true
    resource?: true
    permission?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPermissionCountAggregateInputType = {
    id?: true
    userId?: true
    resource?: true
    permission?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPermission to aggregate.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPermissions
    **/
    _count?: true | UserPermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPermissionMaxAggregateInputType
  }

  export type GetUserPermissionAggregateType<T extends UserPermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPermission[P]>
      : GetScalarType<T[P], AggregateUserPermission[P]>
  }




  export type UserPermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPermissionWhereInput
    orderBy?: UserPermissionOrderByWithAggregationInput | UserPermissionOrderByWithAggregationInput[]
    by: UserPermissionScalarFieldEnum[] | UserPermissionScalarFieldEnum
    having?: UserPermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPermissionCountAggregateInputType | true
    _min?: UserPermissionMinAggregateInputType
    _max?: UserPermissionMaxAggregateInputType
  }

  export type UserPermissionGroupByOutputType = {
    id: string
    userId: string
    resource: $Enums.ResourceType
    permission: $Enums.PermissionType
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: UserPermissionCountAggregateOutputType | null
    _min: UserPermissionMinAggregateOutputType | null
    _max: UserPermissionMaxAggregateOutputType | null
  }

  type GetUserPermissionGroupByPayload<T extends UserPermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPermissionGroupByOutputType[P]>
            : GetScalarType<T[P], UserPermissionGroupByOutputType[P]>
        }
      >
    >


  export type UserPermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resource?: boolean
    permission?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPermission"]>

  export type UserPermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resource?: boolean
    permission?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPermission"]>

  export type UserPermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    resource?: boolean
    permission?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPermission"]>

  export type UserPermissionSelectScalar = {
    id?: boolean
    userId?: boolean
    resource?: boolean
    permission?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "resource" | "permission" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["userPermission"]>
  export type UserPermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPermission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      resource: $Enums.ResourceType
      permission: $Enums.PermissionType
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPermission"]>
    composites: {}
  }

  type UserPermissionGetPayload<S extends boolean | null | undefined | UserPermissionDefaultArgs> = $Result.GetResult<Prisma.$UserPermissionPayload, S>

  type UserPermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPermissionCountAggregateInputType | true
    }

  export interface UserPermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPermission'], meta: { name: 'UserPermission' } }
    /**
     * Find zero or one UserPermission that matches the filter.
     * @param {UserPermissionFindUniqueArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPermissionFindUniqueArgs>(args: SelectSubset<T, UserPermissionFindUniqueArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPermissionFindUniqueOrThrowArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindFirstArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPermissionFindFirstArgs>(args?: SelectSubset<T, UserPermissionFindFirstArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindFirstOrThrowArgs} args - Arguments to find a UserPermission
     * @example
     * // Get one UserPermission
     * const userPermission = await prisma.userPermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPermissions
     * const userPermissions = await prisma.userPermission.findMany()
     * 
     * // Get first 10 UserPermissions
     * const userPermissions = await prisma.userPermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPermissionWithIdOnly = await prisma.userPermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPermissionFindManyArgs>(args?: SelectSubset<T, UserPermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPermission.
     * @param {UserPermissionCreateArgs} args - Arguments to create a UserPermission.
     * @example
     * // Create one UserPermission
     * const UserPermission = await prisma.userPermission.create({
     *   data: {
     *     // ... data to create a UserPermission
     *   }
     * })
     * 
     */
    create<T extends UserPermissionCreateArgs>(args: SelectSubset<T, UserPermissionCreateArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPermissions.
     * @param {UserPermissionCreateManyArgs} args - Arguments to create many UserPermissions.
     * @example
     * // Create many UserPermissions
     * const userPermission = await prisma.userPermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPermissionCreateManyArgs>(args?: SelectSubset<T, UserPermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPermissions and returns the data saved in the database.
     * @param {UserPermissionCreateManyAndReturnArgs} args - Arguments to create many UserPermissions.
     * @example
     * // Create many UserPermissions
     * const userPermission = await prisma.userPermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPermissions and only return the `id`
     * const userPermissionWithIdOnly = await prisma.userPermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPermission.
     * @param {UserPermissionDeleteArgs} args - Arguments to delete one UserPermission.
     * @example
     * // Delete one UserPermission
     * const UserPermission = await prisma.userPermission.delete({
     *   where: {
     *     // ... filter to delete one UserPermission
     *   }
     * })
     * 
     */
    delete<T extends UserPermissionDeleteArgs>(args: SelectSubset<T, UserPermissionDeleteArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPermission.
     * @param {UserPermissionUpdateArgs} args - Arguments to update one UserPermission.
     * @example
     * // Update one UserPermission
     * const userPermission = await prisma.userPermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPermissionUpdateArgs>(args: SelectSubset<T, UserPermissionUpdateArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPermissions.
     * @param {UserPermissionDeleteManyArgs} args - Arguments to filter UserPermissions to delete.
     * @example
     * // Delete a few UserPermissions
     * const { count } = await prisma.userPermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPermissionDeleteManyArgs>(args?: SelectSubset<T, UserPermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPermissions
     * const userPermission = await prisma.userPermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPermissionUpdateManyArgs>(args: SelectSubset<T, UserPermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPermissions and returns the data updated in the database.
     * @param {UserPermissionUpdateManyAndReturnArgs} args - Arguments to update many UserPermissions.
     * @example
     * // Update many UserPermissions
     * const userPermission = await prisma.userPermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPermissions and only return the `id`
     * const userPermissionWithIdOnly = await prisma.userPermission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPermission.
     * @param {UserPermissionUpsertArgs} args - Arguments to update or create a UserPermission.
     * @example
     * // Update or create a UserPermission
     * const userPermission = await prisma.userPermission.upsert({
     *   create: {
     *     // ... data to create a UserPermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPermission we want to update
     *   }
     * })
     */
    upsert<T extends UserPermissionUpsertArgs>(args: SelectSubset<T, UserPermissionUpsertArgs<ExtArgs>>): Prisma__UserPermissionClient<$Result.GetResult<Prisma.$UserPermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionCountArgs} args - Arguments to filter UserPermissions to count.
     * @example
     * // Count the number of UserPermissions
     * const count = await prisma.userPermission.count({
     *   where: {
     *     // ... the filter for the UserPermissions we want to count
     *   }
     * })
    **/
    count<T extends UserPermissionCountArgs>(
      args?: Subset<T, UserPermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPermissionAggregateArgs>(args: Subset<T, UserPermissionAggregateArgs>): Prisma.PrismaPromise<GetUserPermissionAggregateType<T>>

    /**
     * Group by UserPermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPermissionGroupByArgs['orderBy'] }
        : { orderBy?: UserPermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPermission model
   */
  readonly fields: UserPermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPermission model
   */
  interface UserPermissionFieldRefs {
    readonly id: FieldRef<"UserPermission", 'String'>
    readonly userId: FieldRef<"UserPermission", 'String'>
    readonly resource: FieldRef<"UserPermission", 'ResourceType'>
    readonly permission: FieldRef<"UserPermission", 'PermissionType'>
    readonly createdById: FieldRef<"UserPermission", 'String'>
    readonly createdAt: FieldRef<"UserPermission", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPermission findUnique
   */
  export type UserPermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission findUniqueOrThrow
   */
  export type UserPermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission findFirst
   */
  export type UserPermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPermissions.
     */
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission findFirstOrThrow
   */
  export type UserPermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermission to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPermissions.
     */
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission findMany
   */
  export type UserPermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter, which UserPermissions to fetch.
     */
    where?: UserPermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPermissions to fetch.
     */
    orderBy?: UserPermissionOrderByWithRelationInput | UserPermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPermissions.
     */
    cursor?: UserPermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPermissions.
     */
    skip?: number
    distinct?: UserPermissionScalarFieldEnum | UserPermissionScalarFieldEnum[]
  }

  /**
   * UserPermission create
   */
  export type UserPermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPermission.
     */
    data: XOR<UserPermissionCreateInput, UserPermissionUncheckedCreateInput>
  }

  /**
   * UserPermission createMany
   */
  export type UserPermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPermissions.
     */
    data: UserPermissionCreateManyInput | UserPermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPermission createManyAndReturn
   */
  export type UserPermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * The data used to create many UserPermissions.
     */
    data: UserPermissionCreateManyInput | UserPermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPermission update
   */
  export type UserPermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPermission.
     */
    data: XOR<UserPermissionUpdateInput, UserPermissionUncheckedUpdateInput>
    /**
     * Choose, which UserPermission to update.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission updateMany
   */
  export type UserPermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPermissions.
     */
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyInput>
    /**
     * Filter which UserPermissions to update
     */
    where?: UserPermissionWhereInput
    /**
     * Limit how many UserPermissions to update.
     */
    limit?: number
  }

  /**
   * UserPermission updateManyAndReturn
   */
  export type UserPermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * The data used to update UserPermissions.
     */
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyInput>
    /**
     * Filter which UserPermissions to update
     */
    where?: UserPermissionWhereInput
    /**
     * Limit how many UserPermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPermission upsert
   */
  export type UserPermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPermission to update in case it exists.
     */
    where: UserPermissionWhereUniqueInput
    /**
     * In case the UserPermission found by the `where` argument doesn't exist, create a new UserPermission with this data.
     */
    create: XOR<UserPermissionCreateInput, UserPermissionUncheckedCreateInput>
    /**
     * In case the UserPermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPermissionUpdateInput, UserPermissionUncheckedUpdateInput>
  }

  /**
   * UserPermission delete
   */
  export type UserPermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
    /**
     * Filter which UserPermission to delete.
     */
    where: UserPermissionWhereUniqueInput
  }

  /**
   * UserPermission deleteMany
   */
  export type UserPermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPermissions to delete
     */
    where?: UserPermissionWhereInput
    /**
     * Limit how many UserPermissions to delete.
     */
    limit?: number
  }

  /**
   * UserPermission without action
   */
  export type UserPermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPermission
     */
    select?: UserPermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPermission
     */
    omit?: UserPermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPermissionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    activationLink: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    activationLink: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    activationLink: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    activationLink?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    activationLink?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    activationLink?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    name: string
    isActive: boolean
    activationLink: string | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    activationLink?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    devices?: boolean | Account$devicesArgs<ExtArgs>
    activations?: boolean | Account$activationsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    activationLink?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    activationLink?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    activationLink?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "activationLink" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    devices?: boolean | Account$devicesArgs<ExtArgs>
    activations?: boolean | Account$activationsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      devices: Prisma.$AccountDevicesPayload<ExtArgs>[]
      activations: Prisma.$AccountActivationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean
      activationLink: string | null
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    devices<T extends Account$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Account$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activations<T extends Account$activationsArgs<ExtArgs> = {}>(args?: Subset<T, Account$activationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly isActive: FieldRef<"Account", 'Boolean'>
    readonly activationLink: FieldRef<"Account", 'String'>
    readonly createdById: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.devices
   */
  export type Account$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    where?: AccountDevicesWhereInput
    orderBy?: AccountDevicesOrderByWithRelationInput | AccountDevicesOrderByWithRelationInput[]
    cursor?: AccountDevicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountDevicesScalarFieldEnum | AccountDevicesScalarFieldEnum[]
  }

  /**
   * Account.activations
   */
  export type Account$activationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
    where?: AccountActivationWhereInput
    orderBy?: AccountActivationOrderByWithRelationInput | AccountActivationOrderByWithRelationInput[]
    cursor?: AccountActivationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountActivationScalarFieldEnum | AccountActivationScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model AccountActivation
   */

  export type AggregateAccountActivation = {
    _count: AccountActivationCountAggregateOutputType | null
    _min: AccountActivationMinAggregateOutputType | null
    _max: AccountActivationMaxAggregateOutputType | null
  }

  export type AccountActivationMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    email: string | null
    code: string | null
    activationLink: string | null
    issueDate: Date | null
    expiryDate: Date | null
    isClaimed: boolean | null
    claimDate: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountActivationMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    email: string | null
    code: string | null
    activationLink: string | null
    issueDate: Date | null
    expiryDate: Date | null
    isClaimed: boolean | null
    claimDate: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountActivationCountAggregateOutputType = {
    id: number
    accountId: number
    email: number
    code: number
    activationLink: number
    issueDate: number
    expiryDate: number
    isClaimed: number
    claimDate: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountActivationMinAggregateInputType = {
    id?: true
    accountId?: true
    email?: true
    code?: true
    activationLink?: true
    issueDate?: true
    expiryDate?: true
    isClaimed?: true
    claimDate?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountActivationMaxAggregateInputType = {
    id?: true
    accountId?: true
    email?: true
    code?: true
    activationLink?: true
    issueDate?: true
    expiryDate?: true
    isClaimed?: true
    claimDate?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountActivationCountAggregateInputType = {
    id?: true
    accountId?: true
    email?: true
    code?: true
    activationLink?: true
    issueDate?: true
    expiryDate?: true
    isClaimed?: true
    claimDate?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountActivationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountActivation to aggregate.
     */
    where?: AccountActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountActivations to fetch.
     */
    orderBy?: AccountActivationOrderByWithRelationInput | AccountActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountActivations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountActivations
    **/
    _count?: true | AccountActivationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountActivationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountActivationMaxAggregateInputType
  }

  export type GetAccountActivationAggregateType<T extends AccountActivationAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountActivation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountActivation[P]>
      : GetScalarType<T[P], AggregateAccountActivation[P]>
  }




  export type AccountActivationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountActivationWhereInput
    orderBy?: AccountActivationOrderByWithAggregationInput | AccountActivationOrderByWithAggregationInput[]
    by: AccountActivationScalarFieldEnum[] | AccountActivationScalarFieldEnum
    having?: AccountActivationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountActivationCountAggregateInputType | true
    _min?: AccountActivationMinAggregateInputType
    _max?: AccountActivationMaxAggregateInputType
  }

  export type AccountActivationGroupByOutputType = {
    id: string
    accountId: string
    email: string
    code: string
    activationLink: string
    issueDate: Date
    expiryDate: Date
    isClaimed: boolean
    claimDate: Date | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: AccountActivationCountAggregateOutputType | null
    _min: AccountActivationMinAggregateOutputType | null
    _max: AccountActivationMaxAggregateOutputType | null
  }

  type GetAccountActivationGroupByPayload<T extends AccountActivationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountActivationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountActivationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountActivationGroupByOutputType[P]>
            : GetScalarType<T[P], AccountActivationGroupByOutputType[P]>
        }
      >
    >


  export type AccountActivationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    email?: boolean
    code?: boolean
    activationLink?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    isClaimed?: boolean
    claimDate?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountActivation"]>

  export type AccountActivationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    email?: boolean
    code?: boolean
    activationLink?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    isClaimed?: boolean
    claimDate?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountActivation"]>

  export type AccountActivationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    email?: boolean
    code?: boolean
    activationLink?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    isClaimed?: boolean
    claimDate?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountActivation"]>

  export type AccountActivationSelectScalar = {
    id?: boolean
    accountId?: boolean
    email?: boolean
    code?: boolean
    activationLink?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    isClaimed?: boolean
    claimDate?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountActivationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "email" | "code" | "activationLink" | "issueDate" | "expiryDate" | "isClaimed" | "claimDate" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["accountActivation"]>
  export type AccountActivationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountActivationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountActivationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountActivationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountActivation"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      email: string
      code: string
      activationLink: string
      issueDate: Date
      expiryDate: Date
      isClaimed: boolean
      claimDate: Date | null
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountActivation"]>
    composites: {}
  }

  type AccountActivationGetPayload<S extends boolean | null | undefined | AccountActivationDefaultArgs> = $Result.GetResult<Prisma.$AccountActivationPayload, S>

  type AccountActivationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountActivationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountActivationCountAggregateInputType | true
    }

  export interface AccountActivationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountActivation'], meta: { name: 'AccountActivation' } }
    /**
     * Find zero or one AccountActivation that matches the filter.
     * @param {AccountActivationFindUniqueArgs} args - Arguments to find a AccountActivation
     * @example
     * // Get one AccountActivation
     * const accountActivation = await prisma.accountActivation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountActivationFindUniqueArgs>(args: SelectSubset<T, AccountActivationFindUniqueArgs<ExtArgs>>): Prisma__AccountActivationClient<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountActivation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountActivationFindUniqueOrThrowArgs} args - Arguments to find a AccountActivation
     * @example
     * // Get one AccountActivation
     * const accountActivation = await prisma.accountActivation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountActivationFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountActivationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountActivationClient<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountActivation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountActivationFindFirstArgs} args - Arguments to find a AccountActivation
     * @example
     * // Get one AccountActivation
     * const accountActivation = await prisma.accountActivation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountActivationFindFirstArgs>(args?: SelectSubset<T, AccountActivationFindFirstArgs<ExtArgs>>): Prisma__AccountActivationClient<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountActivation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountActivationFindFirstOrThrowArgs} args - Arguments to find a AccountActivation
     * @example
     * // Get one AccountActivation
     * const accountActivation = await prisma.accountActivation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountActivationFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountActivationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountActivationClient<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountActivations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountActivationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountActivations
     * const accountActivations = await prisma.accountActivation.findMany()
     * 
     * // Get first 10 AccountActivations
     * const accountActivations = await prisma.accountActivation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountActivationWithIdOnly = await prisma.accountActivation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountActivationFindManyArgs>(args?: SelectSubset<T, AccountActivationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountActivation.
     * @param {AccountActivationCreateArgs} args - Arguments to create a AccountActivation.
     * @example
     * // Create one AccountActivation
     * const AccountActivation = await prisma.accountActivation.create({
     *   data: {
     *     // ... data to create a AccountActivation
     *   }
     * })
     * 
     */
    create<T extends AccountActivationCreateArgs>(args: SelectSubset<T, AccountActivationCreateArgs<ExtArgs>>): Prisma__AccountActivationClient<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountActivations.
     * @param {AccountActivationCreateManyArgs} args - Arguments to create many AccountActivations.
     * @example
     * // Create many AccountActivations
     * const accountActivation = await prisma.accountActivation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountActivationCreateManyArgs>(args?: SelectSubset<T, AccountActivationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountActivations and returns the data saved in the database.
     * @param {AccountActivationCreateManyAndReturnArgs} args - Arguments to create many AccountActivations.
     * @example
     * // Create many AccountActivations
     * const accountActivation = await prisma.accountActivation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountActivations and only return the `id`
     * const accountActivationWithIdOnly = await prisma.accountActivation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountActivationCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountActivationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountActivation.
     * @param {AccountActivationDeleteArgs} args - Arguments to delete one AccountActivation.
     * @example
     * // Delete one AccountActivation
     * const AccountActivation = await prisma.accountActivation.delete({
     *   where: {
     *     // ... filter to delete one AccountActivation
     *   }
     * })
     * 
     */
    delete<T extends AccountActivationDeleteArgs>(args: SelectSubset<T, AccountActivationDeleteArgs<ExtArgs>>): Prisma__AccountActivationClient<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountActivation.
     * @param {AccountActivationUpdateArgs} args - Arguments to update one AccountActivation.
     * @example
     * // Update one AccountActivation
     * const accountActivation = await prisma.accountActivation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountActivationUpdateArgs>(args: SelectSubset<T, AccountActivationUpdateArgs<ExtArgs>>): Prisma__AccountActivationClient<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountActivations.
     * @param {AccountActivationDeleteManyArgs} args - Arguments to filter AccountActivations to delete.
     * @example
     * // Delete a few AccountActivations
     * const { count } = await prisma.accountActivation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountActivationDeleteManyArgs>(args?: SelectSubset<T, AccountActivationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountActivations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountActivationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountActivations
     * const accountActivation = await prisma.accountActivation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountActivationUpdateManyArgs>(args: SelectSubset<T, AccountActivationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountActivations and returns the data updated in the database.
     * @param {AccountActivationUpdateManyAndReturnArgs} args - Arguments to update many AccountActivations.
     * @example
     * // Update many AccountActivations
     * const accountActivation = await prisma.accountActivation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountActivations and only return the `id`
     * const accountActivationWithIdOnly = await prisma.accountActivation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountActivationUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountActivationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountActivation.
     * @param {AccountActivationUpsertArgs} args - Arguments to update or create a AccountActivation.
     * @example
     * // Update or create a AccountActivation
     * const accountActivation = await prisma.accountActivation.upsert({
     *   create: {
     *     // ... data to create a AccountActivation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountActivation we want to update
     *   }
     * })
     */
    upsert<T extends AccountActivationUpsertArgs>(args: SelectSubset<T, AccountActivationUpsertArgs<ExtArgs>>): Prisma__AccountActivationClient<$Result.GetResult<Prisma.$AccountActivationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountActivations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountActivationCountArgs} args - Arguments to filter AccountActivations to count.
     * @example
     * // Count the number of AccountActivations
     * const count = await prisma.accountActivation.count({
     *   where: {
     *     // ... the filter for the AccountActivations we want to count
     *   }
     * })
    **/
    count<T extends AccountActivationCountArgs>(
      args?: Subset<T, AccountActivationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountActivationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountActivation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountActivationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountActivationAggregateArgs>(args: Subset<T, AccountActivationAggregateArgs>): Prisma.PrismaPromise<GetAccountActivationAggregateType<T>>

    /**
     * Group by AccountActivation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountActivationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountActivationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountActivationGroupByArgs['orderBy'] }
        : { orderBy?: AccountActivationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountActivationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountActivationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountActivation model
   */
  readonly fields: AccountActivationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountActivation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountActivationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountActivation model
   */
  interface AccountActivationFieldRefs {
    readonly id: FieldRef<"AccountActivation", 'String'>
    readonly accountId: FieldRef<"AccountActivation", 'String'>
    readonly email: FieldRef<"AccountActivation", 'String'>
    readonly code: FieldRef<"AccountActivation", 'String'>
    readonly activationLink: FieldRef<"AccountActivation", 'String'>
    readonly issueDate: FieldRef<"AccountActivation", 'DateTime'>
    readonly expiryDate: FieldRef<"AccountActivation", 'DateTime'>
    readonly isClaimed: FieldRef<"AccountActivation", 'Boolean'>
    readonly claimDate: FieldRef<"AccountActivation", 'DateTime'>
    readonly createdById: FieldRef<"AccountActivation", 'String'>
    readonly createdAt: FieldRef<"AccountActivation", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountActivation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountActivation findUnique
   */
  export type AccountActivationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
    /**
     * Filter, which AccountActivation to fetch.
     */
    where: AccountActivationWhereUniqueInput
  }

  /**
   * AccountActivation findUniqueOrThrow
   */
  export type AccountActivationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
    /**
     * Filter, which AccountActivation to fetch.
     */
    where: AccountActivationWhereUniqueInput
  }

  /**
   * AccountActivation findFirst
   */
  export type AccountActivationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
    /**
     * Filter, which AccountActivation to fetch.
     */
    where?: AccountActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountActivations to fetch.
     */
    orderBy?: AccountActivationOrderByWithRelationInput | AccountActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountActivations.
     */
    cursor?: AccountActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountActivations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountActivations.
     */
    distinct?: AccountActivationScalarFieldEnum | AccountActivationScalarFieldEnum[]
  }

  /**
   * AccountActivation findFirstOrThrow
   */
  export type AccountActivationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
    /**
     * Filter, which AccountActivation to fetch.
     */
    where?: AccountActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountActivations to fetch.
     */
    orderBy?: AccountActivationOrderByWithRelationInput | AccountActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountActivations.
     */
    cursor?: AccountActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountActivations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountActivations.
     */
    distinct?: AccountActivationScalarFieldEnum | AccountActivationScalarFieldEnum[]
  }

  /**
   * AccountActivation findMany
   */
  export type AccountActivationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
    /**
     * Filter, which AccountActivations to fetch.
     */
    where?: AccountActivationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountActivations to fetch.
     */
    orderBy?: AccountActivationOrderByWithRelationInput | AccountActivationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountActivations.
     */
    cursor?: AccountActivationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountActivations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountActivations.
     */
    skip?: number
    distinct?: AccountActivationScalarFieldEnum | AccountActivationScalarFieldEnum[]
  }

  /**
   * AccountActivation create
   */
  export type AccountActivationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountActivation.
     */
    data: XOR<AccountActivationCreateInput, AccountActivationUncheckedCreateInput>
  }

  /**
   * AccountActivation createMany
   */
  export type AccountActivationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountActivations.
     */
    data: AccountActivationCreateManyInput | AccountActivationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountActivation createManyAndReturn
   */
  export type AccountActivationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * The data used to create many AccountActivations.
     */
    data: AccountActivationCreateManyInput | AccountActivationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountActivation update
   */
  export type AccountActivationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountActivation.
     */
    data: XOR<AccountActivationUpdateInput, AccountActivationUncheckedUpdateInput>
    /**
     * Choose, which AccountActivation to update.
     */
    where: AccountActivationWhereUniqueInput
  }

  /**
   * AccountActivation updateMany
   */
  export type AccountActivationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountActivations.
     */
    data: XOR<AccountActivationUpdateManyMutationInput, AccountActivationUncheckedUpdateManyInput>
    /**
     * Filter which AccountActivations to update
     */
    where?: AccountActivationWhereInput
    /**
     * Limit how many AccountActivations to update.
     */
    limit?: number
  }

  /**
   * AccountActivation updateManyAndReturn
   */
  export type AccountActivationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * The data used to update AccountActivations.
     */
    data: XOR<AccountActivationUpdateManyMutationInput, AccountActivationUncheckedUpdateManyInput>
    /**
     * Filter which AccountActivations to update
     */
    where?: AccountActivationWhereInput
    /**
     * Limit how many AccountActivations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountActivation upsert
   */
  export type AccountActivationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountActivation to update in case it exists.
     */
    where: AccountActivationWhereUniqueInput
    /**
     * In case the AccountActivation found by the `where` argument doesn't exist, create a new AccountActivation with this data.
     */
    create: XOR<AccountActivationCreateInput, AccountActivationUncheckedCreateInput>
    /**
     * In case the AccountActivation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountActivationUpdateInput, AccountActivationUncheckedUpdateInput>
  }

  /**
   * AccountActivation delete
   */
  export type AccountActivationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
    /**
     * Filter which AccountActivation to delete.
     */
    where: AccountActivationWhereUniqueInput
  }

  /**
   * AccountActivation deleteMany
   */
  export type AccountActivationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountActivations to delete
     */
    where?: AccountActivationWhereInput
    /**
     * Limit how many AccountActivations to delete.
     */
    limit?: number
  }

  /**
   * AccountActivation without action
   */
  export type AccountActivationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountActivation
     */
    select?: AccountActivationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountActivation
     */
    omit?: AccountActivationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountActivationInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isActive: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    name: string
    isActive: boolean
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    accounts?: boolean | Device$accountsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    accounts?: boolean | Device$accountsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      accounts: Prisma.$AccountDevicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isActive: boolean
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accounts<T extends Device$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Device$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly isActive: FieldRef<"Device", 'Boolean'>
    readonly createdById: FieldRef<"Device", 'String'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly updatedAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.accounts
   */
  export type Device$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    where?: AccountDevicesWhereInput
    orderBy?: AccountDevicesOrderByWithRelationInput | AccountDevicesOrderByWithRelationInput[]
    cursor?: AccountDevicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountDevicesScalarFieldEnum | AccountDevicesScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model AccountDevices
   */

  export type AggregateAccountDevices = {
    _count: AccountDevicesCountAggregateOutputType | null
    _min: AccountDevicesMinAggregateOutputType | null
    _max: AccountDevicesMaxAggregateOutputType | null
  }

  export type AccountDevicesMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    deviceId: string | null
    isActive: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountDevicesMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    deviceId: string | null
    isActive: boolean | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountDevicesCountAggregateOutputType = {
    id: number
    accountId: number
    deviceId: number
    isActive: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountDevicesMinAggregateInputType = {
    id?: true
    accountId?: true
    deviceId?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountDevicesMaxAggregateInputType = {
    id?: true
    accountId?: true
    deviceId?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountDevicesCountAggregateInputType = {
    id?: true
    accountId?: true
    deviceId?: true
    isActive?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountDevicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountDevices to aggregate.
     */
    where?: AccountDevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDevices to fetch.
     */
    orderBy?: AccountDevicesOrderByWithRelationInput | AccountDevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountDevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountDevices
    **/
    _count?: true | AccountDevicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountDevicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountDevicesMaxAggregateInputType
  }

  export type GetAccountDevicesAggregateType<T extends AccountDevicesAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountDevices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountDevices[P]>
      : GetScalarType<T[P], AggregateAccountDevices[P]>
  }




  export type AccountDevicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountDevicesWhereInput
    orderBy?: AccountDevicesOrderByWithAggregationInput | AccountDevicesOrderByWithAggregationInput[]
    by: AccountDevicesScalarFieldEnum[] | AccountDevicesScalarFieldEnum
    having?: AccountDevicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountDevicesCountAggregateInputType | true
    _min?: AccountDevicesMinAggregateInputType
    _max?: AccountDevicesMaxAggregateInputType
  }

  export type AccountDevicesGroupByOutputType = {
    id: string
    accountId: string
    deviceId: string
    isActive: boolean
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: AccountDevicesCountAggregateOutputType | null
    _min: AccountDevicesMinAggregateOutputType | null
    _max: AccountDevicesMaxAggregateOutputType | null
  }

  type GetAccountDevicesGroupByPayload<T extends AccountDevicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountDevicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountDevicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountDevicesGroupByOutputType[P]>
            : GetScalarType<T[P], AccountDevicesGroupByOutputType[P]>
        }
      >
    >


  export type AccountDevicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    deviceId?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountDevices"]>

  export type AccountDevicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    deviceId?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountDevices"]>

  export type AccountDevicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    deviceId?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountDevices"]>

  export type AccountDevicesSelectScalar = {
    id?: boolean
    accountId?: boolean
    deviceId?: boolean
    isActive?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountDevicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "deviceId" | "isActive" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["accountDevices"]>
  export type AccountDevicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountDevicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountDevicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountDevicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountDevices"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      device: Prisma.$DevicePayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      deviceId: string
      isActive: boolean
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountDevices"]>
    composites: {}
  }

  type AccountDevicesGetPayload<S extends boolean | null | undefined | AccountDevicesDefaultArgs> = $Result.GetResult<Prisma.$AccountDevicesPayload, S>

  type AccountDevicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountDevicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountDevicesCountAggregateInputType | true
    }

  export interface AccountDevicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountDevices'], meta: { name: 'AccountDevices' } }
    /**
     * Find zero or one AccountDevices that matches the filter.
     * @param {AccountDevicesFindUniqueArgs} args - Arguments to find a AccountDevices
     * @example
     * // Get one AccountDevices
     * const accountDevices = await prisma.accountDevices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountDevicesFindUniqueArgs>(args: SelectSubset<T, AccountDevicesFindUniqueArgs<ExtArgs>>): Prisma__AccountDevicesClient<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccountDevices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountDevicesFindUniqueOrThrowArgs} args - Arguments to find a AccountDevices
     * @example
     * // Get one AccountDevices
     * const accountDevices = await prisma.accountDevices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountDevicesFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountDevicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountDevicesClient<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDevicesFindFirstArgs} args - Arguments to find a AccountDevices
     * @example
     * // Get one AccountDevices
     * const accountDevices = await prisma.accountDevices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountDevicesFindFirstArgs>(args?: SelectSubset<T, AccountDevicesFindFirstArgs<ExtArgs>>): Prisma__AccountDevicesClient<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccountDevices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDevicesFindFirstOrThrowArgs} args - Arguments to find a AccountDevices
     * @example
     * // Get one AccountDevices
     * const accountDevices = await prisma.accountDevices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountDevicesFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountDevicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountDevicesClient<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccountDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDevicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountDevices
     * const accountDevices = await prisma.accountDevices.findMany()
     * 
     * // Get first 10 AccountDevices
     * const accountDevices = await prisma.accountDevices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountDevicesWithIdOnly = await prisma.accountDevices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountDevicesFindManyArgs>(args?: SelectSubset<T, AccountDevicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccountDevices.
     * @param {AccountDevicesCreateArgs} args - Arguments to create a AccountDevices.
     * @example
     * // Create one AccountDevices
     * const AccountDevices = await prisma.accountDevices.create({
     *   data: {
     *     // ... data to create a AccountDevices
     *   }
     * })
     * 
     */
    create<T extends AccountDevicesCreateArgs>(args: SelectSubset<T, AccountDevicesCreateArgs<ExtArgs>>): Prisma__AccountDevicesClient<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccountDevices.
     * @param {AccountDevicesCreateManyArgs} args - Arguments to create many AccountDevices.
     * @example
     * // Create many AccountDevices
     * const accountDevices = await prisma.accountDevices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountDevicesCreateManyArgs>(args?: SelectSubset<T, AccountDevicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccountDevices and returns the data saved in the database.
     * @param {AccountDevicesCreateManyAndReturnArgs} args - Arguments to create many AccountDevices.
     * @example
     * // Create many AccountDevices
     * const accountDevices = await prisma.accountDevices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccountDevices and only return the `id`
     * const accountDevicesWithIdOnly = await prisma.accountDevices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountDevicesCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountDevicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccountDevices.
     * @param {AccountDevicesDeleteArgs} args - Arguments to delete one AccountDevices.
     * @example
     * // Delete one AccountDevices
     * const AccountDevices = await prisma.accountDevices.delete({
     *   where: {
     *     // ... filter to delete one AccountDevices
     *   }
     * })
     * 
     */
    delete<T extends AccountDevicesDeleteArgs>(args: SelectSubset<T, AccountDevicesDeleteArgs<ExtArgs>>): Prisma__AccountDevicesClient<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccountDevices.
     * @param {AccountDevicesUpdateArgs} args - Arguments to update one AccountDevices.
     * @example
     * // Update one AccountDevices
     * const accountDevices = await prisma.accountDevices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountDevicesUpdateArgs>(args: SelectSubset<T, AccountDevicesUpdateArgs<ExtArgs>>): Prisma__AccountDevicesClient<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccountDevices.
     * @param {AccountDevicesDeleteManyArgs} args - Arguments to filter AccountDevices to delete.
     * @example
     * // Delete a few AccountDevices
     * const { count } = await prisma.accountDevices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDevicesDeleteManyArgs>(args?: SelectSubset<T, AccountDevicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDevicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountDevices
     * const accountDevices = await prisma.accountDevices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountDevicesUpdateManyArgs>(args: SelectSubset<T, AccountDevicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountDevices and returns the data updated in the database.
     * @param {AccountDevicesUpdateManyAndReturnArgs} args - Arguments to update many AccountDevices.
     * @example
     * // Update many AccountDevices
     * const accountDevices = await prisma.accountDevices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccountDevices and only return the `id`
     * const accountDevicesWithIdOnly = await prisma.accountDevices.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountDevicesUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountDevicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccountDevices.
     * @param {AccountDevicesUpsertArgs} args - Arguments to update or create a AccountDevices.
     * @example
     * // Update or create a AccountDevices
     * const accountDevices = await prisma.accountDevices.upsert({
     *   create: {
     *     // ... data to create a AccountDevices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountDevices we want to update
     *   }
     * })
     */
    upsert<T extends AccountDevicesUpsertArgs>(args: SelectSubset<T, AccountDevicesUpsertArgs<ExtArgs>>): Prisma__AccountDevicesClient<$Result.GetResult<Prisma.$AccountDevicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccountDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDevicesCountArgs} args - Arguments to filter AccountDevices to count.
     * @example
     * // Count the number of AccountDevices
     * const count = await prisma.accountDevices.count({
     *   where: {
     *     // ... the filter for the AccountDevices we want to count
     *   }
     * })
    **/
    count<T extends AccountDevicesCountArgs>(
      args?: Subset<T, AccountDevicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountDevicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDevicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountDevicesAggregateArgs>(args: Subset<T, AccountDevicesAggregateArgs>): Prisma.PrismaPromise<GetAccountDevicesAggregateType<T>>

    /**
     * Group by AccountDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountDevicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountDevicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountDevicesGroupByArgs['orderBy'] }
        : { orderBy?: AccountDevicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountDevicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountDevicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountDevices model
   */
  readonly fields: AccountDevicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountDevices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountDevicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountDevices model
   */
  interface AccountDevicesFieldRefs {
    readonly id: FieldRef<"AccountDevices", 'String'>
    readonly accountId: FieldRef<"AccountDevices", 'String'>
    readonly deviceId: FieldRef<"AccountDevices", 'String'>
    readonly isActive: FieldRef<"AccountDevices", 'Boolean'>
    readonly createdById: FieldRef<"AccountDevices", 'String'>
    readonly createdAt: FieldRef<"AccountDevices", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountDevices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountDevices findUnique
   */
  export type AccountDevicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    /**
     * Filter, which AccountDevices to fetch.
     */
    where: AccountDevicesWhereUniqueInput
  }

  /**
   * AccountDevices findUniqueOrThrow
   */
  export type AccountDevicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    /**
     * Filter, which AccountDevices to fetch.
     */
    where: AccountDevicesWhereUniqueInput
  }

  /**
   * AccountDevices findFirst
   */
  export type AccountDevicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    /**
     * Filter, which AccountDevices to fetch.
     */
    where?: AccountDevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDevices to fetch.
     */
    orderBy?: AccountDevicesOrderByWithRelationInput | AccountDevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountDevices.
     */
    cursor?: AccountDevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountDevices.
     */
    distinct?: AccountDevicesScalarFieldEnum | AccountDevicesScalarFieldEnum[]
  }

  /**
   * AccountDevices findFirstOrThrow
   */
  export type AccountDevicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    /**
     * Filter, which AccountDevices to fetch.
     */
    where?: AccountDevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDevices to fetch.
     */
    orderBy?: AccountDevicesOrderByWithRelationInput | AccountDevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountDevices.
     */
    cursor?: AccountDevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountDevices.
     */
    distinct?: AccountDevicesScalarFieldEnum | AccountDevicesScalarFieldEnum[]
  }

  /**
   * AccountDevices findMany
   */
  export type AccountDevicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    /**
     * Filter, which AccountDevices to fetch.
     */
    where?: AccountDevicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountDevices to fetch.
     */
    orderBy?: AccountDevicesOrderByWithRelationInput | AccountDevicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountDevices.
     */
    cursor?: AccountDevicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountDevices.
     */
    skip?: number
    distinct?: AccountDevicesScalarFieldEnum | AccountDevicesScalarFieldEnum[]
  }

  /**
   * AccountDevices create
   */
  export type AccountDevicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountDevices.
     */
    data: XOR<AccountDevicesCreateInput, AccountDevicesUncheckedCreateInput>
  }

  /**
   * AccountDevices createMany
   */
  export type AccountDevicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountDevices.
     */
    data: AccountDevicesCreateManyInput | AccountDevicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountDevices createManyAndReturn
   */
  export type AccountDevicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * The data used to create many AccountDevices.
     */
    data: AccountDevicesCreateManyInput | AccountDevicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountDevices update
   */
  export type AccountDevicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountDevices.
     */
    data: XOR<AccountDevicesUpdateInput, AccountDevicesUncheckedUpdateInput>
    /**
     * Choose, which AccountDevices to update.
     */
    where: AccountDevicesWhereUniqueInput
  }

  /**
   * AccountDevices updateMany
   */
  export type AccountDevicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountDevices.
     */
    data: XOR<AccountDevicesUpdateManyMutationInput, AccountDevicesUncheckedUpdateManyInput>
    /**
     * Filter which AccountDevices to update
     */
    where?: AccountDevicesWhereInput
    /**
     * Limit how many AccountDevices to update.
     */
    limit?: number
  }

  /**
   * AccountDevices updateManyAndReturn
   */
  export type AccountDevicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * The data used to update AccountDevices.
     */
    data: XOR<AccountDevicesUpdateManyMutationInput, AccountDevicesUncheckedUpdateManyInput>
    /**
     * Filter which AccountDevices to update
     */
    where?: AccountDevicesWhereInput
    /**
     * Limit how many AccountDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AccountDevices upsert
   */
  export type AccountDevicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountDevices to update in case it exists.
     */
    where: AccountDevicesWhereUniqueInput
    /**
     * In case the AccountDevices found by the `where` argument doesn't exist, create a new AccountDevices with this data.
     */
    create: XOR<AccountDevicesCreateInput, AccountDevicesUncheckedCreateInput>
    /**
     * In case the AccountDevices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountDevicesUpdateInput, AccountDevicesUncheckedUpdateInput>
  }

  /**
   * AccountDevices delete
   */
  export type AccountDevicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
    /**
     * Filter which AccountDevices to delete.
     */
    where: AccountDevicesWhereUniqueInput
  }

  /**
   * AccountDevices deleteMany
   */
  export type AccountDevicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountDevices to delete
     */
    where?: AccountDevicesWhereInput
    /**
     * Limit how many AccountDevices to delete.
     */
    limit?: number
  }

  /**
   * AccountDevices without action
   */
  export type AccountDevicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountDevices
     */
    select?: AccountDevicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccountDevices
     */
    omit?: AccountDevicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountDevicesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    localAccountId: 'localAccountId',
    name: 'name',
    email: 'email',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPermissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    resource: 'resource',
    permission: 'permission',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPermissionScalarFieldEnum = (typeof UserPermissionScalarFieldEnum)[keyof typeof UserPermissionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    activationLink: 'activationLink',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AccountActivationScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    email: 'email',
    code: 'code',
    activationLink: 'activationLink',
    issueDate: 'issueDate',
    expiryDate: 'expiryDate',
    isClaimed: 'isClaimed',
    claimDate: 'claimDate',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountActivationScalarFieldEnum = (typeof AccountActivationScalarFieldEnum)[keyof typeof AccountActivationScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const AccountDevicesScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    deviceId: 'deviceId',
    isActive: 'isActive',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountDevicesScalarFieldEnum = (typeof AccountDevicesScalarFieldEnum)[keyof typeof AccountDevicesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ResourceType'
   */
  export type EnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType'>
    


  /**
   * Reference to a field of type 'ResourceType[]'
   */
  export type ListEnumResourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResourceType[]'>
    


  /**
   * Reference to a field of type 'PermissionType'
   */
  export type EnumPermissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionType'>
    


  /**
   * Reference to a field of type 'PermissionType[]'
   */
  export type ListEnumPermissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    localAccountId?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdById?: StringNullableFilter<"User"> | string | null
    createdAccounts?: AccountListRelationFilter
    createdDevices?: DeviceListRelationFilter
    createdAccountActivations?: AccountActivationListRelationFilter
    createdAccountDevices?: AccountDevicesListRelationFilter
    createdUserPermission?: UserPermissionListRelationFilter
    permissions?: UserPermissionListRelationFilter
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdUsers?: UserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    localAccountId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAccounts?: AccountOrderByRelationAggregateInput
    createdDevices?: DeviceOrderByRelationAggregateInput
    createdAccountActivations?: AccountActivationOrderByRelationAggregateInput
    createdAccountDevices?: AccountDevicesOrderByRelationAggregateInput
    createdUserPermission?: UserPermissionOrderByRelationAggregateInput
    permissions?: UserPermissionOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
    createdUsers?: UserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    localAccountId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdById?: StringNullableFilter<"User"> | string | null
    createdAccounts?: AccountListRelationFilter
    createdDevices?: DeviceListRelationFilter
    createdAccountActivations?: AccountActivationListRelationFilter
    createdAccountDevices?: AccountDevicesListRelationFilter
    createdUserPermission?: UserPermissionListRelationFilter
    permissions?: UserPermissionListRelationFilter
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdUsers?: UserListRelationFilter
  }, "id" | "localAccountId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    localAccountId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    localAccountId?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdById?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserPermissionWhereInput = {
    AND?: UserPermissionWhereInput | UserPermissionWhereInput[]
    OR?: UserPermissionWhereInput[]
    NOT?: UserPermissionWhereInput | UserPermissionWhereInput[]
    id?: StringFilter<"UserPermission"> | string
    userId?: StringFilter<"UserPermission"> | string
    resource?: EnumResourceTypeFilter<"UserPermission"> | $Enums.ResourceType
    permission?: EnumPermissionTypeFilter<"UserPermission"> | $Enums.PermissionType
    createdById?: StringFilter<"UserPermission"> | string
    createdAt?: DateTimeFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserPermission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPermissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    resource?: SortOrder
    permission?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type UserPermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_resource_permission?: UserPermissionUserIdResourcePermissionCompoundUniqueInput
    AND?: UserPermissionWhereInput | UserPermissionWhereInput[]
    OR?: UserPermissionWhereInput[]
    NOT?: UserPermissionWhereInput | UserPermissionWhereInput[]
    userId?: StringFilter<"UserPermission"> | string
    resource?: EnumResourceTypeFilter<"UserPermission"> | $Enums.ResourceType
    permission?: EnumPermissionTypeFilter<"UserPermission"> | $Enums.PermissionType
    createdById?: StringFilter<"UserPermission"> | string
    createdAt?: DateTimeFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserPermission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_resource_permission">

  export type UserPermissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    resource?: SortOrder
    permission?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPermissionCountOrderByAggregateInput
    _max?: UserPermissionMaxOrderByAggregateInput
    _min?: UserPermissionMinOrderByAggregateInput
  }

  export type UserPermissionScalarWhereWithAggregatesInput = {
    AND?: UserPermissionScalarWhereWithAggregatesInput | UserPermissionScalarWhereWithAggregatesInput[]
    OR?: UserPermissionScalarWhereWithAggregatesInput[]
    NOT?: UserPermissionScalarWhereWithAggregatesInput | UserPermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPermission"> | string
    userId?: StringWithAggregatesFilter<"UserPermission"> | string
    resource?: EnumResourceTypeWithAggregatesFilter<"UserPermission"> | $Enums.ResourceType
    permission?: EnumPermissionTypeWithAggregatesFilter<"UserPermission"> | $Enums.PermissionType
    createdById?: StringWithAggregatesFilter<"UserPermission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPermission"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    isActive?: BoolFilter<"Account"> | boolean
    activationLink?: StringNullableFilter<"Account"> | string | null
    createdById?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    devices?: AccountDevicesListRelationFilter
    activations?: AccountActivationListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    activationLink?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    devices?: AccountDevicesOrderByRelationAggregateInput
    activations?: AccountActivationOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    isActive?: BoolFilter<"Account"> | boolean
    activationLink?: StringNullableFilter<"Account"> | string | null
    createdById?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    devices?: AccountDevicesListRelationFilter
    activations?: AccountActivationListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    activationLink?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    isActive?: BoolWithAggregatesFilter<"Account"> | boolean
    activationLink?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdById?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type AccountActivationWhereInput = {
    AND?: AccountActivationWhereInput | AccountActivationWhereInput[]
    OR?: AccountActivationWhereInput[]
    NOT?: AccountActivationWhereInput | AccountActivationWhereInput[]
    id?: StringFilter<"AccountActivation"> | string
    accountId?: StringFilter<"AccountActivation"> | string
    email?: StringFilter<"AccountActivation"> | string
    code?: StringFilter<"AccountActivation"> | string
    activationLink?: StringFilter<"AccountActivation"> | string
    issueDate?: DateTimeFilter<"AccountActivation"> | Date | string
    expiryDate?: DateTimeFilter<"AccountActivation"> | Date | string
    isClaimed?: BoolFilter<"AccountActivation"> | boolean
    claimDate?: DateTimeNullableFilter<"AccountActivation"> | Date | string | null
    createdById?: StringFilter<"AccountActivation"> | string
    createdAt?: DateTimeFilter<"AccountActivation"> | Date | string
    updatedAt?: DateTimeFilter<"AccountActivation"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountActivationOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    activationLink?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    isClaimed?: SortOrder
    claimDate?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: AccountOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type AccountActivationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountActivationWhereInput | AccountActivationWhereInput[]
    OR?: AccountActivationWhereInput[]
    NOT?: AccountActivationWhereInput | AccountActivationWhereInput[]
    accountId?: StringFilter<"AccountActivation"> | string
    email?: StringFilter<"AccountActivation"> | string
    code?: StringFilter<"AccountActivation"> | string
    activationLink?: StringFilter<"AccountActivation"> | string
    issueDate?: DateTimeFilter<"AccountActivation"> | Date | string
    expiryDate?: DateTimeFilter<"AccountActivation"> | Date | string
    isClaimed?: BoolFilter<"AccountActivation"> | boolean
    claimDate?: DateTimeNullableFilter<"AccountActivation"> | Date | string | null
    createdById?: StringFilter<"AccountActivation"> | string
    createdAt?: DateTimeFilter<"AccountActivation"> | Date | string
    updatedAt?: DateTimeFilter<"AccountActivation"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountActivationOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    activationLink?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    isClaimed?: SortOrder
    claimDate?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountActivationCountOrderByAggregateInput
    _max?: AccountActivationMaxOrderByAggregateInput
    _min?: AccountActivationMinOrderByAggregateInput
  }

  export type AccountActivationScalarWhereWithAggregatesInput = {
    AND?: AccountActivationScalarWhereWithAggregatesInput | AccountActivationScalarWhereWithAggregatesInput[]
    OR?: AccountActivationScalarWhereWithAggregatesInput[]
    NOT?: AccountActivationScalarWhereWithAggregatesInput | AccountActivationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountActivation"> | string
    accountId?: StringWithAggregatesFilter<"AccountActivation"> | string
    email?: StringWithAggregatesFilter<"AccountActivation"> | string
    code?: StringWithAggregatesFilter<"AccountActivation"> | string
    activationLink?: StringWithAggregatesFilter<"AccountActivation"> | string
    issueDate?: DateTimeWithAggregatesFilter<"AccountActivation"> | Date | string
    expiryDate?: DateTimeWithAggregatesFilter<"AccountActivation"> | Date | string
    isClaimed?: BoolWithAggregatesFilter<"AccountActivation"> | boolean
    claimDate?: DateTimeNullableWithAggregatesFilter<"AccountActivation"> | Date | string | null
    createdById?: StringWithAggregatesFilter<"AccountActivation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AccountActivation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountActivation"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    isActive?: BoolFilter<"Device"> | boolean
    createdById?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    accounts?: AccountDevicesListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    accounts?: AccountDevicesOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    isActive?: BoolFilter<"Device"> | boolean
    createdById?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    accounts?: AccountDevicesListRelationFilter
  }, "id" | "name">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    name?: StringWithAggregatesFilter<"Device"> | string
    isActive?: BoolWithAggregatesFilter<"Device"> | boolean
    createdById?: StringWithAggregatesFilter<"Device"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type AccountDevicesWhereInput = {
    AND?: AccountDevicesWhereInput | AccountDevicesWhereInput[]
    OR?: AccountDevicesWhereInput[]
    NOT?: AccountDevicesWhereInput | AccountDevicesWhereInput[]
    id?: StringFilter<"AccountDevices"> | string
    accountId?: StringFilter<"AccountDevices"> | string
    deviceId?: StringFilter<"AccountDevices"> | string
    isActive?: BoolFilter<"AccountDevices"> | boolean
    createdById?: StringFilter<"AccountDevices"> | string
    createdAt?: DateTimeFilter<"AccountDevices"> | Date | string
    updatedAt?: DateTimeFilter<"AccountDevices"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountDevicesOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    deviceId?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: AccountOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type AccountDevicesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountId_deviceId?: AccountDevicesAccountIdDeviceIdCompoundUniqueInput
    AND?: AccountDevicesWhereInput | AccountDevicesWhereInput[]
    OR?: AccountDevicesWhereInput[]
    NOT?: AccountDevicesWhereInput | AccountDevicesWhereInput[]
    accountId?: StringFilter<"AccountDevices"> | string
    deviceId?: StringFilter<"AccountDevices"> | string
    isActive?: BoolFilter<"AccountDevices"> | boolean
    createdById?: StringFilter<"AccountDevices"> | string
    createdAt?: DateTimeFilter<"AccountDevices"> | Date | string
    updatedAt?: DateTimeFilter<"AccountDevices"> | Date | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "accountId_deviceId">

  export type AccountDevicesOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    deviceId?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountDevicesCountOrderByAggregateInput
    _max?: AccountDevicesMaxOrderByAggregateInput
    _min?: AccountDevicesMinOrderByAggregateInput
  }

  export type AccountDevicesScalarWhereWithAggregatesInput = {
    AND?: AccountDevicesScalarWhereWithAggregatesInput | AccountDevicesScalarWhereWithAggregatesInput[]
    OR?: AccountDevicesScalarWhereWithAggregatesInput[]
    NOT?: AccountDevicesScalarWhereWithAggregatesInput | AccountDevicesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccountDevices"> | string
    accountId?: StringWithAggregatesFilter<"AccountDevices"> | string
    deviceId?: StringWithAggregatesFilter<"AccountDevices"> | string
    isActive?: BoolWithAggregatesFilter<"AccountDevices"> | boolean
    createdById?: StringWithAggregatesFilter<"AccountDevices"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AccountDevices"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountDevices"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdAccounts?: AccountCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionCreateNestedManyWithoutUserInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    createdAccounts?: AccountUncheckedCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesUncheckedCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAccounts?: AccountUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUpdateManyWithoutUserNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAccounts?: AccountUncheckedUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPermissionCreateInput = {
    id?: string
    resource: $Enums.ResourceType
    permission?: $Enums.PermissionType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPermissionsInput
    createdBy: UserCreateNestedOneWithoutCreatedUserPermissionInput
  }

  export type UserPermissionUncheckedCreateInput = {
    id?: string
    userId: string
    resource: $Enums.ResourceType
    permission?: $Enums.PermissionType
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    permission?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPermissionsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedUserPermissionNestedInput
  }

  export type UserPermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    permission?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionCreateManyInput = {
    id?: string
    userId: string
    resource: $Enums.ResourceType
    permission?: $Enums.PermissionType
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    permission?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    permission?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    activationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedAccountsInput
    devices?: AccountDevicesCreateNestedManyWithoutAccountInput
    activations?: AccountActivationCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    activationLink?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: AccountDevicesUncheckedCreateNestedManyWithoutAccountInput
    activations?: AccountActivationUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedAccountsNestedInput
    devices?: AccountDevicesUpdateManyWithoutAccountNestedInput
    activations?: AccountActivationUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: AccountDevicesUncheckedUpdateManyWithoutAccountNestedInput
    activations?: AccountActivationUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    name: string
    isActive?: boolean
    activationLink?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountActivationCreateInput = {
    id?: string
    email: string
    code?: string
    activationLink: string
    issueDate?: Date | string
    expiryDate: Date | string
    isClaimed?: boolean
    claimDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutActivationsInput
    createdBy: UserCreateNestedOneWithoutCreatedAccountActivationsInput
  }

  export type AccountActivationUncheckedCreateInput = {
    id?: string
    accountId: string
    email: string
    code?: string
    activationLink: string
    issueDate?: Date | string
    expiryDate: Date | string
    isClaimed?: boolean
    claimDate?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountActivationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    activationLink?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    claimDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutActivationsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedAccountActivationsNestedInput
  }

  export type AccountActivationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    activationLink?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    claimDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountActivationCreateManyInput = {
    id?: string
    accountId: string
    email: string
    code?: string
    activationLink: string
    issueDate?: Date | string
    expiryDate: Date | string
    isClaimed?: boolean
    claimDate?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountActivationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    activationLink?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    claimDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountActivationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    activationLink?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    claimDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedDevicesInput
    accounts?: AccountDevicesCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountDevicesUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedDevicesNestedInput
    accounts?: AccountDevicesUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountDevicesUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    name: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDevicesCreateInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutDevicesInput
    device: DeviceCreateNestedOneWithoutAccountsInput
    createdBy: UserCreateNestedOneWithoutCreatedAccountDevicesInput
  }

  export type AccountDevicesUncheckedCreateInput = {
    id?: string
    accountId: string
    deviceId: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountDevicesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutDevicesNestedInput
    device?: DeviceUpdateOneRequiredWithoutAccountsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedAccountDevicesNestedInput
  }

  export type AccountDevicesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDevicesCreateManyInput = {
    id?: string
    accountId: string
    deviceId: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountDevicesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDevicesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type AccountActivationListRelationFilter = {
    every?: AccountActivationWhereInput
    some?: AccountActivationWhereInput
    none?: AccountActivationWhereInput
  }

  export type AccountDevicesListRelationFilter = {
    every?: AccountDevicesWhereInput
    some?: AccountDevicesWhereInput
    none?: AccountDevicesWhereInput
  }

  export type UserPermissionListRelationFilter = {
    every?: UserPermissionWhereInput
    some?: UserPermissionWhereInput
    none?: UserPermissionWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountActivationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountDevicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    localAccountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    localAccountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    localAccountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
  }

  export type EnumPermissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionType | EnumPermissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionTypeFilter<$PrismaModel> | $Enums.PermissionType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserPermissionUserIdResourcePermissionCompoundUniqueInput = {
    userId: string
    resource: $Enums.ResourceType
    permission: $Enums.PermissionType
  }

  export type UserPermissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resource?: SortOrder
    permission?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resource?: SortOrder
    permission?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPermissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    resource?: SortOrder
    permission?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
  }

  export type EnumPermissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionType | EnumPermissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PermissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionTypeFilter<$PrismaModel>
    _max?: NestedEnumPermissionTypeFilter<$PrismaModel>
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    activationLink?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    activationLink?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    activationLink?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type AccountActivationCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    activationLink?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    isClaimed?: SortOrder
    claimDate?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountActivationMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    activationLink?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    isClaimed?: SortOrder
    claimDate?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountActivationMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    email?: SortOrder
    code?: SortOrder
    activationLink?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    isClaimed?: SortOrder
    claimDate?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type AccountDevicesAccountIdDeviceIdCompoundUniqueInput = {
    accountId: string
    deviceId: string
  }

  export type AccountDevicesCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    deviceId?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountDevicesMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    deviceId?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountDevicesMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    deviceId?: SortOrder
    isActive?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AccountCreateWithoutCreatedByInput, AccountUncheckedCreateWithoutCreatedByInput> | AccountCreateWithoutCreatedByInput[] | AccountUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutCreatedByInput | AccountCreateOrConnectWithoutCreatedByInput[]
    createMany?: AccountCreateManyCreatedByInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput> | DeviceCreateWithoutCreatedByInput[] | DeviceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCreatedByInput | DeviceCreateOrConnectWithoutCreatedByInput[]
    createMany?: DeviceCreateManyCreatedByInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type AccountActivationCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AccountActivationCreateWithoutCreatedByInput, AccountActivationUncheckedCreateWithoutCreatedByInput> | AccountActivationCreateWithoutCreatedByInput[] | AccountActivationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountActivationCreateOrConnectWithoutCreatedByInput | AccountActivationCreateOrConnectWithoutCreatedByInput[]
    createMany?: AccountActivationCreateManyCreatedByInputEnvelope
    connect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
  }

  export type AccountDevicesCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AccountDevicesCreateWithoutCreatedByInput, AccountDevicesUncheckedCreateWithoutCreatedByInput> | AccountDevicesCreateWithoutCreatedByInput[] | AccountDevicesUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutCreatedByInput | AccountDevicesCreateOrConnectWithoutCreatedByInput[]
    createMany?: AccountDevicesCreateManyCreatedByInputEnvelope
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
  }

  export type UserPermissionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserPermissionCreateWithoutCreatedByInput, UserPermissionUncheckedCreateWithoutCreatedByInput> | UserPermissionCreateWithoutCreatedByInput[] | UserPermissionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutCreatedByInput | UserPermissionCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserPermissionCreateManyCreatedByInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type UserPermissionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedUsersInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AccountCreateWithoutCreatedByInput, AccountUncheckedCreateWithoutCreatedByInput> | AccountCreateWithoutCreatedByInput[] | AccountUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutCreatedByInput | AccountCreateOrConnectWithoutCreatedByInput[]
    createMany?: AccountCreateManyCreatedByInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput> | DeviceCreateWithoutCreatedByInput[] | DeviceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCreatedByInput | DeviceCreateOrConnectWithoutCreatedByInput[]
    createMany?: DeviceCreateManyCreatedByInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type AccountActivationUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AccountActivationCreateWithoutCreatedByInput, AccountActivationUncheckedCreateWithoutCreatedByInput> | AccountActivationCreateWithoutCreatedByInput[] | AccountActivationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountActivationCreateOrConnectWithoutCreatedByInput | AccountActivationCreateOrConnectWithoutCreatedByInput[]
    createMany?: AccountActivationCreateManyCreatedByInputEnvelope
    connect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
  }

  export type AccountDevicesUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<AccountDevicesCreateWithoutCreatedByInput, AccountDevicesUncheckedCreateWithoutCreatedByInput> | AccountDevicesCreateWithoutCreatedByInput[] | AccountDevicesUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutCreatedByInput | AccountDevicesCreateOrConnectWithoutCreatedByInput[]
    createMany?: AccountDevicesCreateManyCreatedByInputEnvelope
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
  }

  export type UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserPermissionCreateWithoutCreatedByInput, UserPermissionUncheckedCreateWithoutCreatedByInput> | UserPermissionCreateWithoutCreatedByInput[] | UserPermissionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutCreatedByInput | UserPermissionCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserPermissionCreateManyCreatedByInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type UserPermissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AccountCreateWithoutCreatedByInput, AccountUncheckedCreateWithoutCreatedByInput> | AccountCreateWithoutCreatedByInput[] | AccountUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutCreatedByInput | AccountCreateOrConnectWithoutCreatedByInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutCreatedByInput | AccountUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AccountCreateManyCreatedByInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutCreatedByInput | AccountUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutCreatedByInput | AccountUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput> | DeviceCreateWithoutCreatedByInput[] | DeviceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCreatedByInput | DeviceCreateOrConnectWithoutCreatedByInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutCreatedByInput | DeviceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DeviceCreateManyCreatedByInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutCreatedByInput | DeviceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutCreatedByInput | DeviceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type AccountActivationUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AccountActivationCreateWithoutCreatedByInput, AccountActivationUncheckedCreateWithoutCreatedByInput> | AccountActivationCreateWithoutCreatedByInput[] | AccountActivationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountActivationCreateOrConnectWithoutCreatedByInput | AccountActivationCreateOrConnectWithoutCreatedByInput[]
    upsert?: AccountActivationUpsertWithWhereUniqueWithoutCreatedByInput | AccountActivationUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AccountActivationCreateManyCreatedByInputEnvelope
    set?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    disconnect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    delete?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    connect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    update?: AccountActivationUpdateWithWhereUniqueWithoutCreatedByInput | AccountActivationUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AccountActivationUpdateManyWithWhereWithoutCreatedByInput | AccountActivationUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AccountActivationScalarWhereInput | AccountActivationScalarWhereInput[]
  }

  export type AccountDevicesUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AccountDevicesCreateWithoutCreatedByInput, AccountDevicesUncheckedCreateWithoutCreatedByInput> | AccountDevicesCreateWithoutCreatedByInput[] | AccountDevicesUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutCreatedByInput | AccountDevicesCreateOrConnectWithoutCreatedByInput[]
    upsert?: AccountDevicesUpsertWithWhereUniqueWithoutCreatedByInput | AccountDevicesUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AccountDevicesCreateManyCreatedByInputEnvelope
    set?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    disconnect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    delete?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    update?: AccountDevicesUpdateWithWhereUniqueWithoutCreatedByInput | AccountDevicesUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AccountDevicesUpdateManyWithWhereWithoutCreatedByInput | AccountDevicesUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AccountDevicesScalarWhereInput | AccountDevicesScalarWhereInput[]
  }

  export type UserPermissionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserPermissionCreateWithoutCreatedByInput, UserPermissionUncheckedCreateWithoutCreatedByInput> | UserPermissionCreateWithoutCreatedByInput[] | UserPermissionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutCreatedByInput | UserPermissionCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutCreatedByInput | UserPermissionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserPermissionCreateManyCreatedByInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutCreatedByInput | UserPermissionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutCreatedByInput | UserPermissionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type UserPermissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutUserInput | UserPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutUserInput | UserPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutUserInput | UserPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCreatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    upsert?: UserUpsertWithoutCreatedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedUsersInput, UserUpdateWithoutCreatedUsersInput>, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AccountCreateWithoutCreatedByInput, AccountUncheckedCreateWithoutCreatedByInput> | AccountCreateWithoutCreatedByInput[] | AccountUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutCreatedByInput | AccountCreateOrConnectWithoutCreatedByInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutCreatedByInput | AccountUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AccountCreateManyCreatedByInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutCreatedByInput | AccountUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutCreatedByInput | AccountUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput> | DeviceCreateWithoutCreatedByInput[] | DeviceUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutCreatedByInput | DeviceCreateOrConnectWithoutCreatedByInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutCreatedByInput | DeviceUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DeviceCreateManyCreatedByInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutCreatedByInput | DeviceUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutCreatedByInput | DeviceUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type AccountActivationUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AccountActivationCreateWithoutCreatedByInput, AccountActivationUncheckedCreateWithoutCreatedByInput> | AccountActivationCreateWithoutCreatedByInput[] | AccountActivationUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountActivationCreateOrConnectWithoutCreatedByInput | AccountActivationCreateOrConnectWithoutCreatedByInput[]
    upsert?: AccountActivationUpsertWithWhereUniqueWithoutCreatedByInput | AccountActivationUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AccountActivationCreateManyCreatedByInputEnvelope
    set?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    disconnect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    delete?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    connect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    update?: AccountActivationUpdateWithWhereUniqueWithoutCreatedByInput | AccountActivationUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AccountActivationUpdateManyWithWhereWithoutCreatedByInput | AccountActivationUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AccountActivationScalarWhereInput | AccountActivationScalarWhereInput[]
  }

  export type AccountDevicesUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<AccountDevicesCreateWithoutCreatedByInput, AccountDevicesUncheckedCreateWithoutCreatedByInput> | AccountDevicesCreateWithoutCreatedByInput[] | AccountDevicesUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutCreatedByInput | AccountDevicesCreateOrConnectWithoutCreatedByInput[]
    upsert?: AccountDevicesUpsertWithWhereUniqueWithoutCreatedByInput | AccountDevicesUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: AccountDevicesCreateManyCreatedByInputEnvelope
    set?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    disconnect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    delete?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    update?: AccountDevicesUpdateWithWhereUniqueWithoutCreatedByInput | AccountDevicesUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: AccountDevicesUpdateManyWithWhereWithoutCreatedByInput | AccountDevicesUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: AccountDevicesScalarWhereInput | AccountDevicesScalarWhereInput[]
  }

  export type UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserPermissionCreateWithoutCreatedByInput, UserPermissionUncheckedCreateWithoutCreatedByInput> | UserPermissionCreateWithoutCreatedByInput[] | UserPermissionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutCreatedByInput | UserPermissionCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutCreatedByInput | UserPermissionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserPermissionCreateManyCreatedByInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutCreatedByInput | UserPermissionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutCreatedByInput | UserPermissionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type UserPermissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput> | UserPermissionCreateWithoutUserInput[] | UserPermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPermissionCreateOrConnectWithoutUserInput | UserPermissionCreateOrConnectWithoutUserInput[]
    upsert?: UserPermissionUpsertWithWhereUniqueWithoutUserInput | UserPermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPermissionCreateManyUserInputEnvelope
    set?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    disconnect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    delete?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    connect?: UserPermissionWhereUniqueInput | UserPermissionWhereUniqueInput[]
    update?: UserPermissionUpdateWithWhereUniqueWithoutUserInput | UserPermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPermissionUpdateManyWithWhereWithoutUserInput | UserPermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedUserPermissionInput = {
    create?: XOR<UserCreateWithoutCreatedUserPermissionInput, UserUncheckedCreateWithoutCreatedUserPermissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUserPermissionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumResourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ResourceType
  }

  export type EnumPermissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PermissionType
  }

  export type UserUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput
    upsert?: UserUpsertWithoutPermissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPermissionsInput, UserUpdateWithoutPermissionsInput>, UserUncheckedUpdateWithoutPermissionsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedUserPermissionNestedInput = {
    create?: XOR<UserCreateWithoutCreatedUserPermissionInput, UserUncheckedCreateWithoutCreatedUserPermissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUserPermissionInput
    upsert?: UserUpsertWithoutCreatedUserPermissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedUserPermissionInput, UserUpdateWithoutCreatedUserPermissionInput>, UserUncheckedUpdateWithoutCreatedUserPermissionInput>
  }

  export type UserCreateNestedOneWithoutCreatedAccountsInput = {
    create?: XOR<UserCreateWithoutCreatedAccountsInput, UserUncheckedCreateWithoutCreatedAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type AccountDevicesCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountDevicesCreateWithoutAccountInput, AccountDevicesUncheckedCreateWithoutAccountInput> | AccountDevicesCreateWithoutAccountInput[] | AccountDevicesUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutAccountInput | AccountDevicesCreateOrConnectWithoutAccountInput[]
    createMany?: AccountDevicesCreateManyAccountInputEnvelope
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
  }

  export type AccountActivationCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountActivationCreateWithoutAccountInput, AccountActivationUncheckedCreateWithoutAccountInput> | AccountActivationCreateWithoutAccountInput[] | AccountActivationUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountActivationCreateOrConnectWithoutAccountInput | AccountActivationCreateOrConnectWithoutAccountInput[]
    createMany?: AccountActivationCreateManyAccountInputEnvelope
    connect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
  }

  export type AccountDevicesUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountDevicesCreateWithoutAccountInput, AccountDevicesUncheckedCreateWithoutAccountInput> | AccountDevicesCreateWithoutAccountInput[] | AccountDevicesUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutAccountInput | AccountDevicesCreateOrConnectWithoutAccountInput[]
    createMany?: AccountDevicesCreateManyAccountInputEnvelope
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
  }

  export type AccountActivationUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<AccountActivationCreateWithoutAccountInput, AccountActivationUncheckedCreateWithoutAccountInput> | AccountActivationCreateWithoutAccountInput[] | AccountActivationUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountActivationCreateOrConnectWithoutAccountInput | AccountActivationCreateOrConnectWithoutAccountInput[]
    createMany?: AccountActivationCreateManyAccountInputEnvelope
    connect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedAccountsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedAccountsInput, UserUncheckedCreateWithoutCreatedAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAccountsInput
    upsert?: UserUpsertWithoutCreatedAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedAccountsInput, UserUpdateWithoutCreatedAccountsInput>, UserUncheckedUpdateWithoutCreatedAccountsInput>
  }

  export type AccountDevicesUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountDevicesCreateWithoutAccountInput, AccountDevicesUncheckedCreateWithoutAccountInput> | AccountDevicesCreateWithoutAccountInput[] | AccountDevicesUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutAccountInput | AccountDevicesCreateOrConnectWithoutAccountInput[]
    upsert?: AccountDevicesUpsertWithWhereUniqueWithoutAccountInput | AccountDevicesUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountDevicesCreateManyAccountInputEnvelope
    set?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    disconnect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    delete?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    update?: AccountDevicesUpdateWithWhereUniqueWithoutAccountInput | AccountDevicesUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountDevicesUpdateManyWithWhereWithoutAccountInput | AccountDevicesUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountDevicesScalarWhereInput | AccountDevicesScalarWhereInput[]
  }

  export type AccountActivationUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountActivationCreateWithoutAccountInput, AccountActivationUncheckedCreateWithoutAccountInput> | AccountActivationCreateWithoutAccountInput[] | AccountActivationUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountActivationCreateOrConnectWithoutAccountInput | AccountActivationCreateOrConnectWithoutAccountInput[]
    upsert?: AccountActivationUpsertWithWhereUniqueWithoutAccountInput | AccountActivationUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountActivationCreateManyAccountInputEnvelope
    set?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    disconnect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    delete?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    connect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    update?: AccountActivationUpdateWithWhereUniqueWithoutAccountInput | AccountActivationUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountActivationUpdateManyWithWhereWithoutAccountInput | AccountActivationUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountActivationScalarWhereInput | AccountActivationScalarWhereInput[]
  }

  export type AccountDevicesUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountDevicesCreateWithoutAccountInput, AccountDevicesUncheckedCreateWithoutAccountInput> | AccountDevicesCreateWithoutAccountInput[] | AccountDevicesUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutAccountInput | AccountDevicesCreateOrConnectWithoutAccountInput[]
    upsert?: AccountDevicesUpsertWithWhereUniqueWithoutAccountInput | AccountDevicesUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountDevicesCreateManyAccountInputEnvelope
    set?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    disconnect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    delete?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    update?: AccountDevicesUpdateWithWhereUniqueWithoutAccountInput | AccountDevicesUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountDevicesUpdateManyWithWhereWithoutAccountInput | AccountDevicesUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountDevicesScalarWhereInput | AccountDevicesScalarWhereInput[]
  }

  export type AccountActivationUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AccountActivationCreateWithoutAccountInput, AccountActivationUncheckedCreateWithoutAccountInput> | AccountActivationCreateWithoutAccountInput[] | AccountActivationUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AccountActivationCreateOrConnectWithoutAccountInput | AccountActivationCreateOrConnectWithoutAccountInput[]
    upsert?: AccountActivationUpsertWithWhereUniqueWithoutAccountInput | AccountActivationUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AccountActivationCreateManyAccountInputEnvelope
    set?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    disconnect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    delete?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    connect?: AccountActivationWhereUniqueInput | AccountActivationWhereUniqueInput[]
    update?: AccountActivationUpdateWithWhereUniqueWithoutAccountInput | AccountActivationUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AccountActivationUpdateManyWithWhereWithoutAccountInput | AccountActivationUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AccountActivationScalarWhereInput | AccountActivationScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutActivationsInput = {
    create?: XOR<AccountCreateWithoutActivationsInput, AccountUncheckedCreateWithoutActivationsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutActivationsInput
    connect?: AccountWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedAccountActivationsInput = {
    create?: XOR<UserCreateWithoutCreatedAccountActivationsInput, UserUncheckedCreateWithoutCreatedAccountActivationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAccountActivationsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateOneRequiredWithoutActivationsNestedInput = {
    create?: XOR<AccountCreateWithoutActivationsInput, AccountUncheckedCreateWithoutActivationsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutActivationsInput
    upsert?: AccountUpsertWithoutActivationsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutActivationsInput, AccountUpdateWithoutActivationsInput>, AccountUncheckedUpdateWithoutActivationsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedAccountActivationsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedAccountActivationsInput, UserUncheckedCreateWithoutCreatedAccountActivationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAccountActivationsInput
    upsert?: UserUpsertWithoutCreatedAccountActivationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedAccountActivationsInput, UserUpdateWithoutCreatedAccountActivationsInput>, UserUncheckedUpdateWithoutCreatedAccountActivationsInput>
  }

  export type UserCreateNestedOneWithoutCreatedDevicesInput = {
    create?: XOR<UserCreateWithoutCreatedDevicesInput, UserUncheckedCreateWithoutCreatedDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type AccountDevicesCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AccountDevicesCreateWithoutDeviceInput, AccountDevicesUncheckedCreateWithoutDeviceInput> | AccountDevicesCreateWithoutDeviceInput[] | AccountDevicesUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutDeviceInput | AccountDevicesCreateOrConnectWithoutDeviceInput[]
    createMany?: AccountDevicesCreateManyDeviceInputEnvelope
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
  }

  export type AccountDevicesUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AccountDevicesCreateWithoutDeviceInput, AccountDevicesUncheckedCreateWithoutDeviceInput> | AccountDevicesCreateWithoutDeviceInput[] | AccountDevicesUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutDeviceInput | AccountDevicesCreateOrConnectWithoutDeviceInput[]
    createMany?: AccountDevicesCreateManyDeviceInputEnvelope
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedDevicesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedDevicesInput, UserUncheckedCreateWithoutCreatedDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDevicesInput
    upsert?: UserUpsertWithoutCreatedDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedDevicesInput, UserUpdateWithoutCreatedDevicesInput>, UserUncheckedUpdateWithoutCreatedDevicesInput>
  }

  export type AccountDevicesUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AccountDevicesCreateWithoutDeviceInput, AccountDevicesUncheckedCreateWithoutDeviceInput> | AccountDevicesCreateWithoutDeviceInput[] | AccountDevicesUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutDeviceInput | AccountDevicesCreateOrConnectWithoutDeviceInput[]
    upsert?: AccountDevicesUpsertWithWhereUniqueWithoutDeviceInput | AccountDevicesUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AccountDevicesCreateManyDeviceInputEnvelope
    set?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    disconnect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    delete?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    update?: AccountDevicesUpdateWithWhereUniqueWithoutDeviceInput | AccountDevicesUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AccountDevicesUpdateManyWithWhereWithoutDeviceInput | AccountDevicesUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AccountDevicesScalarWhereInput | AccountDevicesScalarWhereInput[]
  }

  export type AccountDevicesUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AccountDevicesCreateWithoutDeviceInput, AccountDevicesUncheckedCreateWithoutDeviceInput> | AccountDevicesCreateWithoutDeviceInput[] | AccountDevicesUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AccountDevicesCreateOrConnectWithoutDeviceInput | AccountDevicesCreateOrConnectWithoutDeviceInput[]
    upsert?: AccountDevicesUpsertWithWhereUniqueWithoutDeviceInput | AccountDevicesUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AccountDevicesCreateManyDeviceInputEnvelope
    set?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    disconnect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    delete?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    connect?: AccountDevicesWhereUniqueInput | AccountDevicesWhereUniqueInput[]
    update?: AccountDevicesUpdateWithWhereUniqueWithoutDeviceInput | AccountDevicesUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AccountDevicesUpdateManyWithWhereWithoutDeviceInput | AccountDevicesUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AccountDevicesScalarWhereInput | AccountDevicesScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutDevicesInput = {
    create?: XOR<AccountCreateWithoutDevicesInput, AccountUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutDevicesInput
    connect?: AccountWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutAccountsInput = {
    create?: XOR<DeviceCreateWithoutAccountsInput, DeviceUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAccountsInput
    connect?: DeviceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedAccountDevicesInput = {
    create?: XOR<UserCreateWithoutCreatedAccountDevicesInput, UserUncheckedCreateWithoutCreatedAccountDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAccountDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<AccountCreateWithoutDevicesInput, AccountUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutDevicesInput
    upsert?: AccountUpsertWithoutDevicesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutDevicesInput, AccountUpdateWithoutDevicesInput>, AccountUncheckedUpdateWithoutDevicesInput>
  }

  export type DeviceUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<DeviceCreateWithoutAccountsInput, DeviceUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAccountsInput
    upsert?: DeviceUpsertWithoutAccountsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutAccountsInput, DeviceUpdateWithoutAccountsInput>, DeviceUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedAccountDevicesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedAccountDevicesInput, UserUncheckedCreateWithoutCreatedAccountDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAccountDevicesInput
    upsert?: UserUpsertWithoutCreatedAccountDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedAccountDevicesInput, UserUpdateWithoutCreatedAccountDevicesInput>, UserUncheckedUpdateWithoutCreatedAccountDevicesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumResourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeFilter<$PrismaModel> | $Enums.ResourceType
  }

  export type NestedEnumPermissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionType | EnumPermissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionTypeFilter<$PrismaModel> | $Enums.PermissionType
  }

  export type NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResourceType | EnumResourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResourceType[] | ListEnumResourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResourceTypeFilter<$PrismaModel>
    _max?: NestedEnumResourceTypeFilter<$PrismaModel>
  }

  export type NestedEnumPermissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionType | EnumPermissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PermissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionTypeFilter<$PrismaModel>
    _max?: NestedEnumPermissionTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AccountCreateWithoutCreatedByInput = {
    id?: string
    name: string
    isActive?: boolean
    activationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: AccountDevicesCreateNestedManyWithoutAccountInput
    activations?: AccountActivationCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    isActive?: boolean
    activationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: AccountDevicesUncheckedCreateNestedManyWithoutAccountInput
    activations?: AccountActivationUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutCreatedByInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutCreatedByInput, AccountUncheckedCreateWithoutCreatedByInput>
  }

  export type AccountCreateManyCreatedByInputEnvelope = {
    data: AccountCreateManyCreatedByInput | AccountCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutCreatedByInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountDevicesCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountDevicesUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutCreatedByInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput>
  }

  export type DeviceCreateManyCreatedByInputEnvelope = {
    data: DeviceCreateManyCreatedByInput | DeviceCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AccountActivationCreateWithoutCreatedByInput = {
    id?: string
    email: string
    code?: string
    activationLink: string
    issueDate?: Date | string
    expiryDate: Date | string
    isClaimed?: boolean
    claimDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutActivationsInput
  }

  export type AccountActivationUncheckedCreateWithoutCreatedByInput = {
    id?: string
    accountId: string
    email: string
    code?: string
    activationLink: string
    issueDate?: Date | string
    expiryDate: Date | string
    isClaimed?: boolean
    claimDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountActivationCreateOrConnectWithoutCreatedByInput = {
    where: AccountActivationWhereUniqueInput
    create: XOR<AccountActivationCreateWithoutCreatedByInput, AccountActivationUncheckedCreateWithoutCreatedByInput>
  }

  export type AccountActivationCreateManyCreatedByInputEnvelope = {
    data: AccountActivationCreateManyCreatedByInput | AccountActivationCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AccountDevicesCreateWithoutCreatedByInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutDevicesInput
    device: DeviceCreateNestedOneWithoutAccountsInput
  }

  export type AccountDevicesUncheckedCreateWithoutCreatedByInput = {
    id?: string
    accountId: string
    deviceId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountDevicesCreateOrConnectWithoutCreatedByInput = {
    where: AccountDevicesWhereUniqueInput
    create: XOR<AccountDevicesCreateWithoutCreatedByInput, AccountDevicesUncheckedCreateWithoutCreatedByInput>
  }

  export type AccountDevicesCreateManyCreatedByInputEnvelope = {
    data: AccountDevicesCreateManyCreatedByInput | AccountDevicesCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserPermissionCreateWithoutCreatedByInput = {
    id?: string
    resource: $Enums.ResourceType
    permission?: $Enums.PermissionType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPermissionsInput
  }

  export type UserPermissionUncheckedCreateWithoutCreatedByInput = {
    id?: string
    userId: string
    resource: $Enums.ResourceType
    permission?: $Enums.PermissionType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionCreateOrConnectWithoutCreatedByInput = {
    where: UserPermissionWhereUniqueInput
    create: XOR<UserPermissionCreateWithoutCreatedByInput, UserPermissionUncheckedCreateWithoutCreatedByInput>
  }

  export type UserPermissionCreateManyCreatedByInputEnvelope = {
    data: UserPermissionCreateManyCreatedByInput | UserPermissionCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserPermissionCreateWithoutUserInput = {
    id?: string
    resource: $Enums.ResourceType
    permission?: $Enums.PermissionType
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedUserPermissionInput
  }

  export type UserPermissionUncheckedCreateWithoutUserInput = {
    id?: string
    resource: $Enums.ResourceType
    permission?: $Enums.PermissionType
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionCreateOrConnectWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    create: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserPermissionCreateManyUserInputEnvelope = {
    data: UserPermissionCreateManyUserInput | UserPermissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedUsersInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdAccounts?: AccountCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionCreateNestedManyWithoutUserInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
  }

  export type UserUncheckedCreateWithoutCreatedUsersInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    createdAccounts?: AccountUncheckedCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesUncheckedCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
  }

  export type UserCreateWithoutCreatedByInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdAccounts?: AccountCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedByInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdAccounts?: AccountUncheckedCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesUncheckedCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserCreateManyCreatedByInputEnvelope = {
    data: UserCreateManyCreatedByInput | UserCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutCreatedByInput, AccountUncheckedUpdateWithoutCreatedByInput>
    create: XOR<AccountCreateWithoutCreatedByInput, AccountUncheckedCreateWithoutCreatedByInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutCreatedByInput, AccountUncheckedUpdateWithoutCreatedByInput>
  }

  export type AccountUpdateManyWithWhereWithoutCreatedByInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    isActive?: BoolFilter<"Account"> | boolean
    activationLink?: StringNullableFilter<"Account"> | string | null
    createdById?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type DeviceUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutCreatedByInput, DeviceUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DeviceCreateWithoutCreatedByInput, DeviceUncheckedCreateWithoutCreatedByInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutCreatedByInput, DeviceUncheckedUpdateWithoutCreatedByInput>
  }

  export type DeviceUpdateManyWithWhereWithoutCreatedByInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    isActive?: BoolFilter<"Device"> | boolean
    createdById?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    updatedAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type AccountActivationUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: AccountActivationWhereUniqueInput
    update: XOR<AccountActivationUpdateWithoutCreatedByInput, AccountActivationUncheckedUpdateWithoutCreatedByInput>
    create: XOR<AccountActivationCreateWithoutCreatedByInput, AccountActivationUncheckedCreateWithoutCreatedByInput>
  }

  export type AccountActivationUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: AccountActivationWhereUniqueInput
    data: XOR<AccountActivationUpdateWithoutCreatedByInput, AccountActivationUncheckedUpdateWithoutCreatedByInput>
  }

  export type AccountActivationUpdateManyWithWhereWithoutCreatedByInput = {
    where: AccountActivationScalarWhereInput
    data: XOR<AccountActivationUpdateManyMutationInput, AccountActivationUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type AccountActivationScalarWhereInput = {
    AND?: AccountActivationScalarWhereInput | AccountActivationScalarWhereInput[]
    OR?: AccountActivationScalarWhereInput[]
    NOT?: AccountActivationScalarWhereInput | AccountActivationScalarWhereInput[]
    id?: StringFilter<"AccountActivation"> | string
    accountId?: StringFilter<"AccountActivation"> | string
    email?: StringFilter<"AccountActivation"> | string
    code?: StringFilter<"AccountActivation"> | string
    activationLink?: StringFilter<"AccountActivation"> | string
    issueDate?: DateTimeFilter<"AccountActivation"> | Date | string
    expiryDate?: DateTimeFilter<"AccountActivation"> | Date | string
    isClaimed?: BoolFilter<"AccountActivation"> | boolean
    claimDate?: DateTimeNullableFilter<"AccountActivation"> | Date | string | null
    createdById?: StringFilter<"AccountActivation"> | string
    createdAt?: DateTimeFilter<"AccountActivation"> | Date | string
    updatedAt?: DateTimeFilter<"AccountActivation"> | Date | string
  }

  export type AccountDevicesUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: AccountDevicesWhereUniqueInput
    update: XOR<AccountDevicesUpdateWithoutCreatedByInput, AccountDevicesUncheckedUpdateWithoutCreatedByInput>
    create: XOR<AccountDevicesCreateWithoutCreatedByInput, AccountDevicesUncheckedCreateWithoutCreatedByInput>
  }

  export type AccountDevicesUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: AccountDevicesWhereUniqueInput
    data: XOR<AccountDevicesUpdateWithoutCreatedByInput, AccountDevicesUncheckedUpdateWithoutCreatedByInput>
  }

  export type AccountDevicesUpdateManyWithWhereWithoutCreatedByInput = {
    where: AccountDevicesScalarWhereInput
    data: XOR<AccountDevicesUpdateManyMutationInput, AccountDevicesUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type AccountDevicesScalarWhereInput = {
    AND?: AccountDevicesScalarWhereInput | AccountDevicesScalarWhereInput[]
    OR?: AccountDevicesScalarWhereInput[]
    NOT?: AccountDevicesScalarWhereInput | AccountDevicesScalarWhereInput[]
    id?: StringFilter<"AccountDevices"> | string
    accountId?: StringFilter<"AccountDevices"> | string
    deviceId?: StringFilter<"AccountDevices"> | string
    isActive?: BoolFilter<"AccountDevices"> | boolean
    createdById?: StringFilter<"AccountDevices"> | string
    createdAt?: DateTimeFilter<"AccountDevices"> | Date | string
    updatedAt?: DateTimeFilter<"AccountDevices"> | Date | string
  }

  export type UserPermissionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: UserPermissionWhereUniqueInput
    update: XOR<UserPermissionUpdateWithoutCreatedByInput, UserPermissionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<UserPermissionCreateWithoutCreatedByInput, UserPermissionUncheckedCreateWithoutCreatedByInput>
  }

  export type UserPermissionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: UserPermissionWhereUniqueInput
    data: XOR<UserPermissionUpdateWithoutCreatedByInput, UserPermissionUncheckedUpdateWithoutCreatedByInput>
  }

  export type UserPermissionUpdateManyWithWhereWithoutCreatedByInput = {
    where: UserPermissionScalarWhereInput
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type UserPermissionScalarWhereInput = {
    AND?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
    OR?: UserPermissionScalarWhereInput[]
    NOT?: UserPermissionScalarWhereInput | UserPermissionScalarWhereInput[]
    id?: StringFilter<"UserPermission"> | string
    userId?: StringFilter<"UserPermission"> | string
    resource?: EnumResourceTypeFilter<"UserPermission"> | $Enums.ResourceType
    permission?: EnumPermissionTypeFilter<"UserPermission"> | $Enums.PermissionType
    createdById?: StringFilter<"UserPermission"> | string
    createdAt?: DateTimeFilter<"UserPermission"> | Date | string
    updatedAt?: DateTimeFilter<"UserPermission"> | Date | string
  }

  export type UserPermissionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    update: XOR<UserPermissionUpdateWithoutUserInput, UserPermissionUncheckedUpdateWithoutUserInput>
    create: XOR<UserPermissionCreateWithoutUserInput, UserPermissionUncheckedCreateWithoutUserInput>
  }

  export type UserPermissionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPermissionWhereUniqueInput
    data: XOR<UserPermissionUpdateWithoutUserInput, UserPermissionUncheckedUpdateWithoutUserInput>
  }

  export type UserPermissionUpdateManyWithWhereWithoutUserInput = {
    where: UserPermissionScalarWhereInput
    data: XOR<UserPermissionUpdateManyMutationInput, UserPermissionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserUpsertWithoutCreatedUsersInput = {
    update: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAccounts?: AccountUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUpdateManyWithoutUserNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAccounts?: AccountUncheckedUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    localAccountId?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdById?: StringNullableFilter<"User"> | string | null
  }

  export type UserCreateWithoutPermissionsInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdAccounts?: AccountCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionCreateNestedManyWithoutCreatedByInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutPermissionsInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    createdAccounts?: AccountUncheckedCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesUncheckedCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutPermissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
  }

  export type UserCreateWithoutCreatedUserPermissionInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdAccounts?: AccountCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionCreateNestedManyWithoutUserInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedUserPermissionInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    createdAccounts?: AccountUncheckedCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesUncheckedCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedUserPermissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedUserPermissionInput, UserUncheckedCreateWithoutCreatedUserPermissionInput>
  }

  export type UserUpsertWithoutPermissionsInput = {
    update: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
  }

  export type UserUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAccounts?: AccountUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUpdateManyWithoutCreatedByNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAccounts?: AccountUncheckedUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpsertWithoutCreatedUserPermissionInput = {
    update: XOR<UserUpdateWithoutCreatedUserPermissionInput, UserUncheckedUpdateWithoutCreatedUserPermissionInput>
    create: XOR<UserCreateWithoutCreatedUserPermissionInput, UserUncheckedCreateWithoutCreatedUserPermissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedUserPermissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedUserPermissionInput, UserUncheckedUpdateWithoutCreatedUserPermissionInput>
  }

  export type UserUpdateWithoutCreatedUserPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAccounts?: AccountUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUpdateManyWithoutUserNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedUserPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAccounts?: AccountUncheckedUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUncheckedUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutCreatedAccountsInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionCreateNestedManyWithoutUserInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedAccountsInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesUncheckedCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedAccountsInput, UserUncheckedCreateWithoutCreatedAccountsInput>
  }

  export type AccountDevicesCreateWithoutAccountInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    device: DeviceCreateNestedOneWithoutAccountsInput
    createdBy: UserCreateNestedOneWithoutCreatedAccountDevicesInput
  }

  export type AccountDevicesUncheckedCreateWithoutAccountInput = {
    id?: string
    deviceId: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountDevicesCreateOrConnectWithoutAccountInput = {
    where: AccountDevicesWhereUniqueInput
    create: XOR<AccountDevicesCreateWithoutAccountInput, AccountDevicesUncheckedCreateWithoutAccountInput>
  }

  export type AccountDevicesCreateManyAccountInputEnvelope = {
    data: AccountDevicesCreateManyAccountInput | AccountDevicesCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type AccountActivationCreateWithoutAccountInput = {
    id?: string
    email: string
    code?: string
    activationLink: string
    issueDate?: Date | string
    expiryDate: Date | string
    isClaimed?: boolean
    claimDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedAccountActivationsInput
  }

  export type AccountActivationUncheckedCreateWithoutAccountInput = {
    id?: string
    email: string
    code?: string
    activationLink: string
    issueDate?: Date | string
    expiryDate: Date | string
    isClaimed?: boolean
    claimDate?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountActivationCreateOrConnectWithoutAccountInput = {
    where: AccountActivationWhereUniqueInput
    create: XOR<AccountActivationCreateWithoutAccountInput, AccountActivationUncheckedCreateWithoutAccountInput>
  }

  export type AccountActivationCreateManyAccountInputEnvelope = {
    data: AccountActivationCreateManyAccountInput | AccountActivationCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedAccountsInput = {
    update: XOR<UserUpdateWithoutCreatedAccountsInput, UserUncheckedUpdateWithoutCreatedAccountsInput>
    create: XOR<UserCreateWithoutCreatedAccountsInput, UserUncheckedCreateWithoutCreatedAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedAccountsInput, UserUncheckedUpdateWithoutCreatedAccountsInput>
  }

  export type UserUpdateWithoutCreatedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUpdateManyWithoutUserNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AccountDevicesUpsertWithWhereUniqueWithoutAccountInput = {
    where: AccountDevicesWhereUniqueInput
    update: XOR<AccountDevicesUpdateWithoutAccountInput, AccountDevicesUncheckedUpdateWithoutAccountInput>
    create: XOR<AccountDevicesCreateWithoutAccountInput, AccountDevicesUncheckedCreateWithoutAccountInput>
  }

  export type AccountDevicesUpdateWithWhereUniqueWithoutAccountInput = {
    where: AccountDevicesWhereUniqueInput
    data: XOR<AccountDevicesUpdateWithoutAccountInput, AccountDevicesUncheckedUpdateWithoutAccountInput>
  }

  export type AccountDevicesUpdateManyWithWhereWithoutAccountInput = {
    where: AccountDevicesScalarWhereInput
    data: XOR<AccountDevicesUpdateManyMutationInput, AccountDevicesUncheckedUpdateManyWithoutAccountInput>
  }

  export type AccountActivationUpsertWithWhereUniqueWithoutAccountInput = {
    where: AccountActivationWhereUniqueInput
    update: XOR<AccountActivationUpdateWithoutAccountInput, AccountActivationUncheckedUpdateWithoutAccountInput>
    create: XOR<AccountActivationCreateWithoutAccountInput, AccountActivationUncheckedCreateWithoutAccountInput>
  }

  export type AccountActivationUpdateWithWhereUniqueWithoutAccountInput = {
    where: AccountActivationWhereUniqueInput
    data: XOR<AccountActivationUpdateWithoutAccountInput, AccountActivationUncheckedUpdateWithoutAccountInput>
  }

  export type AccountActivationUpdateManyWithWhereWithoutAccountInput = {
    where: AccountActivationScalarWhereInput
    data: XOR<AccountActivationUpdateManyMutationInput, AccountActivationUncheckedUpdateManyWithoutAccountInput>
  }

  export type AccountCreateWithoutActivationsInput = {
    id?: string
    name: string
    isActive?: boolean
    activationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedAccountsInput
    devices?: AccountDevicesCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutActivationsInput = {
    id?: string
    name: string
    isActive?: boolean
    activationLink?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: AccountDevicesUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutActivationsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutActivationsInput, AccountUncheckedCreateWithoutActivationsInput>
  }

  export type UserCreateWithoutCreatedAccountActivationsInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdAccounts?: AccountCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionCreateNestedManyWithoutUserInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedAccountActivationsInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    createdAccounts?: AccountUncheckedCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesUncheckedCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedAccountActivationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedAccountActivationsInput, UserUncheckedCreateWithoutCreatedAccountActivationsInput>
  }

  export type AccountUpsertWithoutActivationsInput = {
    update: XOR<AccountUpdateWithoutActivationsInput, AccountUncheckedUpdateWithoutActivationsInput>
    create: XOR<AccountCreateWithoutActivationsInput, AccountUncheckedCreateWithoutActivationsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutActivationsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutActivationsInput, AccountUncheckedUpdateWithoutActivationsInput>
  }

  export type AccountUpdateWithoutActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedAccountsNestedInput
    devices?: AccountDevicesUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: AccountDevicesUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type UserUpsertWithoutCreatedAccountActivationsInput = {
    update: XOR<UserUpdateWithoutCreatedAccountActivationsInput, UserUncheckedUpdateWithoutCreatedAccountActivationsInput>
    create: XOR<UserCreateWithoutCreatedAccountActivationsInput, UserUncheckedCreateWithoutCreatedAccountActivationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedAccountActivationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedAccountActivationsInput, UserUncheckedUpdateWithoutCreatedAccountActivationsInput>
  }

  export type UserUpdateWithoutCreatedAccountActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAccounts?: AccountUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUpdateManyWithoutUserNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedAccountActivationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAccounts?: AccountUncheckedUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutCreatedDevicesInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdAccounts?: AccountCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionCreateNestedManyWithoutUserInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedDevicesInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    createdAccounts?: AccountUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountDevices?: AccountDevicesUncheckedCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedDevicesInput, UserUncheckedCreateWithoutCreatedDevicesInput>
  }

  export type AccountDevicesCreateWithoutDeviceInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutDevicesInput
    createdBy: UserCreateNestedOneWithoutCreatedAccountDevicesInput
  }

  export type AccountDevicesUncheckedCreateWithoutDeviceInput = {
    id?: string
    accountId: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountDevicesCreateOrConnectWithoutDeviceInput = {
    where: AccountDevicesWhereUniqueInput
    create: XOR<AccountDevicesCreateWithoutDeviceInput, AccountDevicesUncheckedCreateWithoutDeviceInput>
  }

  export type AccountDevicesCreateManyDeviceInputEnvelope = {
    data: AccountDevicesCreateManyDeviceInput | AccountDevicesCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedDevicesInput = {
    update: XOR<UserUpdateWithoutCreatedDevicesInput, UserUncheckedUpdateWithoutCreatedDevicesInput>
    create: XOR<UserCreateWithoutCreatedDevicesInput, UserUncheckedCreateWithoutCreatedDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedDevicesInput, UserUncheckedUpdateWithoutCreatedDevicesInput>
  }

  export type UserUpdateWithoutCreatedDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAccounts?: AccountUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUpdateManyWithoutUserNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAccounts?: AccountUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AccountDevicesUpsertWithWhereUniqueWithoutDeviceInput = {
    where: AccountDevicesWhereUniqueInput
    update: XOR<AccountDevicesUpdateWithoutDeviceInput, AccountDevicesUncheckedUpdateWithoutDeviceInput>
    create: XOR<AccountDevicesCreateWithoutDeviceInput, AccountDevicesUncheckedCreateWithoutDeviceInput>
  }

  export type AccountDevicesUpdateWithWhereUniqueWithoutDeviceInput = {
    where: AccountDevicesWhereUniqueInput
    data: XOR<AccountDevicesUpdateWithoutDeviceInput, AccountDevicesUncheckedUpdateWithoutDeviceInput>
  }

  export type AccountDevicesUpdateManyWithWhereWithoutDeviceInput = {
    where: AccountDevicesScalarWhereInput
    data: XOR<AccountDevicesUpdateManyMutationInput, AccountDevicesUncheckedUpdateManyWithoutDeviceInput>
  }

  export type AccountCreateWithoutDevicesInput = {
    id?: string
    name: string
    isActive?: boolean
    activationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedAccountsInput
    activations?: AccountActivationCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutDevicesInput = {
    id?: string
    name: string
    isActive?: boolean
    activationLink?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activations?: AccountActivationUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutDevicesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutDevicesInput, AccountUncheckedCreateWithoutDevicesInput>
  }

  export type DeviceCreateWithoutAccountsInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedDevicesInput
  }

  export type DeviceUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutAccountsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutAccountsInput, DeviceUncheckedCreateWithoutAccountsInput>
  }

  export type UserCreateWithoutCreatedAccountDevicesInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdAccounts?: AccountCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionCreateNestedManyWithoutUserInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedAccountDevicesInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById?: string | null
    createdAccounts?: AccountUncheckedCreateNestedManyWithoutCreatedByInput
    createdDevices?: DeviceUncheckedCreateNestedManyWithoutCreatedByInput
    createdAccountActivations?: AccountActivationUncheckedCreateNestedManyWithoutCreatedByInput
    createdUserPermission?: UserPermissionUncheckedCreateNestedManyWithoutCreatedByInput
    permissions?: UserPermissionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedAccountDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedAccountDevicesInput, UserUncheckedCreateWithoutCreatedAccountDevicesInput>
  }

  export type AccountUpsertWithoutDevicesInput = {
    update: XOR<AccountUpdateWithoutDevicesInput, AccountUncheckedUpdateWithoutDevicesInput>
    create: XOR<AccountCreateWithoutDevicesInput, AccountUncheckedCreateWithoutDevicesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutDevicesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutDevicesInput, AccountUncheckedUpdateWithoutDevicesInput>
  }

  export type AccountUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedAccountsNestedInput
    activations?: AccountActivationUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activations?: AccountActivationUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type DeviceUpsertWithoutAccountsInput = {
    update: XOR<DeviceUpdateWithoutAccountsInput, DeviceUncheckedUpdateWithoutAccountsInput>
    create: XOR<DeviceCreateWithoutAccountsInput, DeviceUncheckedCreateWithoutAccountsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutAccountsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutAccountsInput, DeviceUncheckedUpdateWithoutAccountsInput>
  }

  export type DeviceUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCreatedAccountDevicesInput = {
    update: XOR<UserUpdateWithoutCreatedAccountDevicesInput, UserUncheckedUpdateWithoutCreatedAccountDevicesInput>
    create: XOR<UserCreateWithoutCreatedAccountDevicesInput, UserUncheckedCreateWithoutCreatedAccountDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedAccountDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedAccountDevicesInput, UserUncheckedUpdateWithoutCreatedAccountDevicesInput>
  }

  export type UserUpdateWithoutCreatedAccountDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAccounts?: AccountUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUpdateManyWithoutUserNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedAccountDevicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAccounts?: AccountUncheckedUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AccountCreateManyCreatedByInput = {
    id?: string
    name: string
    isActive?: boolean
    activationLink?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeviceCreateManyCreatedByInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountActivationCreateManyCreatedByInput = {
    id?: string
    accountId: string
    email: string
    code?: string
    activationLink: string
    issueDate?: Date | string
    expiryDate: Date | string
    isClaimed?: boolean
    claimDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountDevicesCreateManyCreatedByInput = {
    id?: string
    accountId: string
    deviceId: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionCreateManyCreatedByInput = {
    id?: string
    userId: string
    resource: $Enums.ResourceType
    permission?: $Enums.PermissionType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPermissionCreateManyUserInput = {
    id?: string
    resource: $Enums.ResourceType
    permission?: $Enums.PermissionType
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyCreatedByInput = {
    id?: string
    localAccountId?: string | null
    name: string
    email: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: AccountDevicesUpdateManyWithoutAccountNestedInput
    activations?: AccountActivationUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: AccountDevicesUncheckedUpdateManyWithoutAccountNestedInput
    activations?: AccountActivationUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activationLink?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountDevicesUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountDevicesUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountActivationUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    activationLink?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    claimDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutActivationsNestedInput
  }

  export type AccountActivationUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    activationLink?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    claimDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountActivationUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    activationLink?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    claimDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDevicesUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutDevicesNestedInput
    device?: DeviceUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountDevicesUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDevicesUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    permission?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type UserPermissionUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    permission?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    permission?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    permission?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedUserPermissionNestedInput
  }

  export type UserPermissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    permission?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPermissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    resource?: EnumResourceTypeFieldUpdateOperationsInput | $Enums.ResourceType
    permission?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAccounts?: AccountUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAccounts?: AccountUncheckedUpdateManyWithoutCreatedByNestedInput
    createdDevices?: DeviceUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountActivations?: AccountActivationUncheckedUpdateManyWithoutCreatedByNestedInput
    createdAccountDevices?: AccountDevicesUncheckedUpdateManyWithoutCreatedByNestedInput
    createdUserPermission?: UserPermissionUncheckedUpdateManyWithoutCreatedByNestedInput
    permissions?: UserPermissionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    localAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDevicesCreateManyAccountInput = {
    id?: string
    deviceId: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountActivationCreateManyAccountInput = {
    id?: string
    email: string
    code?: string
    activationLink: string
    issueDate?: Date | string
    expiryDate: Date | string
    isClaimed?: boolean
    claimDate?: Date | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountDevicesUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutAccountsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedAccountDevicesNestedInput
  }

  export type AccountDevicesUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDevicesUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountActivationUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    activationLink?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    claimDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedAccountActivationsNestedInput
  }

  export type AccountActivationUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    activationLink?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    claimDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountActivationUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    activationLink?: StringFieldUpdateOperationsInput | string
    issueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isClaimed?: BoolFieldUpdateOperationsInput | boolean
    claimDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDevicesCreateManyDeviceInput = {
    id?: string
    accountId: string
    isActive?: boolean
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountDevicesUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutDevicesNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedAccountDevicesNestedInput
  }

  export type AccountDevicesUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountDevicesUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}