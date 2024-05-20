/* tslint:disable */
/* eslint-disable */
/**
 * Femsa API
 * Femsa sdk
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: engineering@femsa.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The Transaction object represents the actions or steps of an order. Statuses can be: unprocessed, pending, available, owen, paid_out, voided, capture, capture_reversal, liquidation, liquidation_reversal, payout, payout_reversal, refund, refund_reversal, chargeback, chargeback_reversal, rounding_adjustment, won_chargeback, transferred, and transferred.
 * @export
 * @interface TransactionResponse
 */
export interface TransactionResponse {
    /**
     * The amount of the transaction.
     * @type {number}
     * @memberof TransactionResponse
     */
    'amount': number;
    /**
     * Randomly assigned unique order identifier associated with the charge.
     * @type {string}
     * @memberof TransactionResponse
     */
    'charge': string;
    /**
     * Date and time of creation of the transaction in Unix format.
     * @type {number}
     * @memberof TransactionResponse
     */
    'created_at': number;
    /**
     * The currency of the transaction. It uses the 3-letter code of the [International Standard ISO 4217.](https://es.wikipedia.org/wiki/ISO_4217)
     * @type {string}
     * @memberof TransactionResponse
     */
    'currency': string;
    /**
     * The amount to be deducted for taxes and commissions.
     * @type {number}
     * @memberof TransactionResponse
     */
    'fee': number;
    /**
     * Unique identifier of the transaction.
     * @type {string}
     * @memberof TransactionResponse
     */
    'id': string;
    /**
     * Indicates whether the transaction was created in live mode or test mode.
     * @type {boolean}
     * @memberof TransactionResponse
     */
    'livemode': boolean;
    /**
     * The net amount after deducting commissions and taxes.
     * @type {number}
     * @memberof TransactionResponse
     */
    'net': number;
    /**
     * Object name, which is transaction.
     * @type {string}
     * @memberof TransactionResponse
     */
    'object': string;
    /**
     * Code indicating transaction status.
     * @type {string}
     * @memberof TransactionResponse
     */
    'status': string;
    /**
     * Transaction Type
     * @type {string}
     * @memberof TransactionResponse
     */
    'type': string;
}

