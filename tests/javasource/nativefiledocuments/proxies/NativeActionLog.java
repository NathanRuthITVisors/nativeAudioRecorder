// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package nativefiledocuments.proxies;

public class NativeActionLog
{
	private final com.mendix.systemwideinterfaces.core.IMendixObject nativeActionLogMendixObject;

	private final com.mendix.systemwideinterfaces.core.IContext context;

	/**
	 * Internal name of this entity
	 */
	public static final java.lang.String entityName = "NativeFileDocuments.NativeActionLog";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		LoggedAt("LoggedAt"),
		LogType("LogType"),
		ActionName("ActionName"),
		LogMessage("LogMessage"),
		NativeActionLog_Account("NativeFileDocuments.NativeActionLog_Account");

		private java.lang.String metaName;

		MemberNames(java.lang.String s)
		{
			metaName = s;
		}

		@java.lang.Override
		public java.lang.String toString()
		{
			return metaName;
		}
	}

	public NativeActionLog(com.mendix.systemwideinterfaces.core.IContext context)
	{
		this(context, com.mendix.core.Core.instantiate(context, "NativeFileDocuments.NativeActionLog"));
	}

	protected NativeActionLog(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject nativeActionLogMendixObject)
	{
		if (nativeActionLogMendixObject == null)
			throw new java.lang.IllegalArgumentException("The given object cannot be null.");
		if (!com.mendix.core.Core.isSubClassOf("NativeFileDocuments.NativeActionLog", nativeActionLogMendixObject.getType()))
			throw new java.lang.IllegalArgumentException("The given object is not a NativeFileDocuments.NativeActionLog");

		this.nativeActionLogMendixObject = nativeActionLogMendixObject;
		this.context = context;
	}

	/**
	 * @deprecated Use 'NativeActionLog.load(IContext, IMendixIdentifier)' instead.
	 */
	@java.lang.Deprecated
	public static nativefiledocuments.proxies.NativeActionLog initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		return nativefiledocuments.proxies.NativeActionLog.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.createSudoClone() can be used to obtain sudo access).
	 */
	public static nativefiledocuments.proxies.NativeActionLog initialize(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixObject mendixObject)
	{
		return new nativefiledocuments.proxies.NativeActionLog(context, mendixObject);
	}

	public static nativefiledocuments.proxies.NativeActionLog load(com.mendix.systemwideinterfaces.core.IContext context, com.mendix.systemwideinterfaces.core.IMendixIdentifier mendixIdentifier) throws com.mendix.core.CoreException
	{
		com.mendix.systemwideinterfaces.core.IMendixObject mendixObject = com.mendix.core.Core.retrieveId(context, mendixIdentifier);
		return nativefiledocuments.proxies.NativeActionLog.initialize(context, mendixObject);
	}

	public static java.util.List<nativefiledocuments.proxies.NativeActionLog> load(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String xpathConstraint) throws com.mendix.core.CoreException
	{
		java.util.List<nativefiledocuments.proxies.NativeActionLog> result = new java.util.ArrayList<nativefiledocuments.proxies.NativeActionLog>();
		for (com.mendix.systemwideinterfaces.core.IMendixObject obj : com.mendix.core.Core.retrieveXPathQuery(context, "//NativeFileDocuments.NativeActionLog" + xpathConstraint))
			result.add(nativefiledocuments.proxies.NativeActionLog.initialize(context, obj));
		return result;
	}

	/**
	 * Commit the changes made on this proxy object.
	 */
	public final void commit() throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Commit the changes made on this proxy object using the specified context.
	 */
	public final void commit(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		com.mendix.core.Core.commit(context, getMendixObject());
	}

	/**
	 * Delete the object.
	 */
	public final void delete()
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}

	/**
	 * Delete the object using the specified context.
	 */
	public final void delete(com.mendix.systemwideinterfaces.core.IContext context)
	{
		com.mendix.core.Core.delete(context, getMendixObject());
	}
	/**
	 * @return value of LoggedAt
	 */
	public final java.util.Date getLoggedAt()
	{
		return getLoggedAt(getContext());
	}

	/**
	 * @param context
	 * @return value of LoggedAt
	 */
	public final java.util.Date getLoggedAt(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.util.Date) getMendixObject().getValue(context, MemberNames.LoggedAt.toString());
	}

	/**
	 * Set value of LoggedAt
	 * @param loggedat
	 */
	public final void setLoggedAt(java.util.Date loggedat)
	{
		setLoggedAt(getContext(), loggedat);
	}

	/**
	 * Set value of LoggedAt
	 * @param context
	 * @param loggedat
	 */
	public final void setLoggedAt(com.mendix.systemwideinterfaces.core.IContext context, java.util.Date loggedat)
	{
		getMendixObject().setValue(context, MemberNames.LoggedAt.toString(), loggedat);
	}

	/**
	 * Set value of LogType
	 * @param logtype
	 */
	public final nativefiledocuments.proxies.LogType getLogType()
	{
		return getLogType(getContext());
	}

	/**
	 * @param context
	 * @return value of LogType
	 */
	public final nativefiledocuments.proxies.LogType getLogType(com.mendix.systemwideinterfaces.core.IContext context)
	{
		Object obj = getMendixObject().getValue(context, MemberNames.LogType.toString());
		if (obj == null)
			return null;

		return nativefiledocuments.proxies.LogType.valueOf((java.lang.String) obj);
	}

	/**
	 * Set value of LogType
	 * @param logtype
	 */
	public final void setLogType(nativefiledocuments.proxies.LogType logtype)
	{
		setLogType(getContext(), logtype);
	}

	/**
	 * Set value of LogType
	 * @param context
	 * @param logtype
	 */
	public final void setLogType(com.mendix.systemwideinterfaces.core.IContext context, nativefiledocuments.proxies.LogType logtype)
	{
		if (logtype != null)
			getMendixObject().setValue(context, MemberNames.LogType.toString(), logtype.toString());
		else
			getMendixObject().setValue(context, MemberNames.LogType.toString(), null);
	}

	/**
	 * @return value of ActionName
	 */
	public final java.lang.String getActionName()
	{
		return getActionName(getContext());
	}

	/**
	 * @param context
	 * @return value of ActionName
	 */
	public final java.lang.String getActionName(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.ActionName.toString());
	}

	/**
	 * Set value of ActionName
	 * @param actionname
	 */
	public final void setActionName(java.lang.String actionname)
	{
		setActionName(getContext(), actionname);
	}

	/**
	 * Set value of ActionName
	 * @param context
	 * @param actionname
	 */
	public final void setActionName(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String actionname)
	{
		getMendixObject().setValue(context, MemberNames.ActionName.toString(), actionname);
	}

	/**
	 * @return value of LogMessage
	 */
	public final java.lang.String getLogMessage()
	{
		return getLogMessage(getContext());
	}

	/**
	 * @param context
	 * @return value of LogMessage
	 */
	public final java.lang.String getLogMessage(com.mendix.systemwideinterfaces.core.IContext context)
	{
		return (java.lang.String) getMendixObject().getValue(context, MemberNames.LogMessage.toString());
	}

	/**
	 * Set value of LogMessage
	 * @param logmessage
	 */
	public final void setLogMessage(java.lang.String logmessage)
	{
		setLogMessage(getContext(), logmessage);
	}

	/**
	 * Set value of LogMessage
	 * @param context
	 * @param logmessage
	 */
	public final void setLogMessage(com.mendix.systemwideinterfaces.core.IContext context, java.lang.String logmessage)
	{
		getMendixObject().setValue(context, MemberNames.LogMessage.toString(), logmessage);
	}

	/**
	 * @return value of NativeActionLog_Account
	 */
	public final administration.proxies.Account getNativeActionLog_Account() throws com.mendix.core.CoreException
	{
		return getNativeActionLog_Account(getContext());
	}

	/**
	 * @param context
	 * @return value of NativeActionLog_Account
	 */
	public final administration.proxies.Account getNativeActionLog_Account(com.mendix.systemwideinterfaces.core.IContext context) throws com.mendix.core.CoreException
	{
		administration.proxies.Account result = null;
		com.mendix.systemwideinterfaces.core.IMendixIdentifier identifier = getMendixObject().getValue(context, MemberNames.NativeActionLog_Account.toString());
		if (identifier != null)
			result = administration.proxies.Account.load(context, identifier);
		return result;
	}

	/**
	 * Set value of NativeActionLog_Account
	 * @param nativeactionlog_account
	 */
	public final void setNativeActionLog_Account(administration.proxies.Account nativeactionlog_account)
	{
		setNativeActionLog_Account(getContext(), nativeactionlog_account);
	}

	/**
	 * Set value of NativeActionLog_Account
	 * @param context
	 * @param nativeactionlog_account
	 */
	public final void setNativeActionLog_Account(com.mendix.systemwideinterfaces.core.IContext context, administration.proxies.Account nativeactionlog_account)
	{
		if (nativeactionlog_account == null)
			getMendixObject().setValue(context, MemberNames.NativeActionLog_Account.toString(), null);
		else
			getMendixObject().setValue(context, MemberNames.NativeActionLog_Account.toString(), nativeactionlog_account.getMendixObject().getId());
	}

	/**
	 * @return the IMendixObject instance of this proxy for use in the Core interface.
	 */
	public final com.mendix.systemwideinterfaces.core.IMendixObject getMendixObject()
	{
		return nativeActionLogMendixObject;
	}

	/**
	 * @return the IContext instance of this proxy, or null if no IContext instance was specified at initialization.
	 */
	public final com.mendix.systemwideinterfaces.core.IContext getContext()
	{
		return context;
	}

	@java.lang.Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final nativefiledocuments.proxies.NativeActionLog that = (nativefiledocuments.proxies.NativeActionLog) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@java.lang.Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static java.lang.String getType()
	{
		return "NativeFileDocuments.NativeActionLog";
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@java.lang.Deprecated
	public java.lang.String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
